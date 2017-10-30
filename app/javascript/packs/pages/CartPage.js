import React, { Component } from "react"
import {
  List,
  Avatar,
  IconButton,
  Typography,
} from "material-ui"
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction
} from "material-ui/List"
import {
  Remove as RemoveIcon,
} from "material-ui-icons"
import { connect } from "react-redux"
import PropTypes from "prop-types"

class CartPage extends Component {
  showRemoveButton(product) {
    const { cart, classes } = this.props

    const productIndex = cart.get("items").findIndex((item) => item.get("id") === product.id)
    if (productIndex < 0) { return null }

    const quantity = cart.getIn(["items", productIndex, "quantity"])

    return (
      <ListItemSecondaryAction className={classes.removeContainer}>
        <Typography type="body1">{quantity}</Typography>
        <IconButton onClick={() => this.props.cartActions.removeItem(product)} color="primary">
          <RemoveIcon />
        </IconButton>
      </ListItemSecondaryAction>
    )
  }
  render() {
    const { items } = this.props.cart
    const itemsList = items.map((product) => (
      <ListItem button onClick={() => addItem(product)} key={product.id}>
        <ListItemAvatar>
          <Avatar alt={product.name} src={product.image.thumb} />
        </ListItemAvatar>
        <ListItemText
          primary={product.name}
          secondary={product.price.human}
        />
        {/* {this.showRemoveButton(product)} */}
      </ListItem>
    ))

    return (
      <div>
        <List>
          {itemsList}
        </List>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state,
  cart: state.cart.toJS(),
})

const ConnectRedux = connect(mapStateToProps)(CartPage)

export default ConnectRedux
