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
  ListItemSecondaryAction,
} from "material-ui/List"
import {
  Remove as RemoveIcon,
} from "material-ui-icons"
import { graphql } from "react-apollo"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { withStyles } from "material-ui/styles"
import PropTypes from "prop-types"

import { GET_PRODUCTS } from "../queries"
import * as cartActions from "../actions/cart"

const styleSheet = () => ({
  removeContainer: {
    display: "flex",
    alignItems: "center",
  },
})

class HomePage extends Component {
  showRemoveButton(product) {
    const { cart, classes } = this.props

    const productIndex = cart.get("items").findIndex((item) => item.getIn(["product", "id"]) === product.id)
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
    const products = this.props.data.products || []
    const { addItem } = this.props.cartActions

    const productsList = products.map((product) => (
      <ListItem button onClick={() => addItem(product)} key={product.id}>
        <ListItemAvatar>
          <Avatar alt={product.name} src={product.image.thumb} />
        </ListItemAvatar>
        <ListItemText
          primary={product.name}
          secondary={product.price.human}
        />
        {this.showRemoveButton(product)}
      </ListItem>
    ))

    return (
      <div>
        <List>
          {productsList}
        </List>
      </div>
    )
  }
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
  cartActions: PropTypes.object.isRequired,
  cart: PropTypes.object,
  classes: PropTypes.object,
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => ({
  cartActions: bindActionCreators(cartActions, dispatch),
})

const ConnectStyle = withStyles(styleSheet)(HomePage)
const ConnectRedux = connect(mapStateToProps, mapDispatchToProps)(ConnectStyle)

export default graphql(GET_PRODUCTS)(ConnectRedux)
