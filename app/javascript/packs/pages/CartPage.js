import React, { Component } from "react"
import {
  List,
  IconButton,
  Typography,
  Button,
} from "material-ui"
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "material-ui/List"
import {
  Remove as RemoveIcon,
} from "material-ui-icons"
import { withStyles } from "material-ui/styles"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PropTypes from "prop-types"

import * as cartActions from "../actions/cart"

const styleSheet = () => ({
  action: {
    position: "relative",
  },
  item: {
    display: "inline-block",
    width: "10%",
  },
  price: {
    textAlign: "right",
    flex: 3,
  },
  product: {
    flex: 5,
  },
  info: {
    padding: 0,
  },
})

class CartPage extends Component {
  render() {
    const { cart, classes } = this.props
    const { addItem, removeItem } = this.props.cartActions
    const { items } = cart

    const itemsList = items.map((item) => (
      <ListItem button onClick={() => addItem(item)} key={item.id}>
        <ListItemText
          primary={item.name}
          className={classes.product}
          classes={{ root: classes.info }}
        />
        <ListItemText
          primary={item.quantity}
          classes={{ root: classes.info }}
        />
        <ListItemSecondaryAction className={classes.action} classes={{ root: classes.action }}>
          <IconButton onClick={() => removeItem(item)} color="primary">
            <RemoveIcon />
          </IconButton>
        </ListItemSecondaryAction>
        <ListItemText
          primary={item.price.human}
          className={classes.price}
          classes={{ root: classes.info }}
        />
      </ListItem>
    ))

    return (
      <div>
        <List>
          {itemsList}
        </List>
        <Button raised primary className={classes.button}>
          Checkout
        </Button>
      </div>
    )
  }
}

CartPage.propTypes = {
  cart: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  cartActions: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  ...state,
  cart: state.cart.toJS(),
})

const mapDispatchToProps = (dispatch) => ({
  cartActions: bindActionCreators(cartActions, dispatch),
})

const ConnectStyle = withStyles(styleSheet)(CartPage)
const ConnectRedux = connect(mapStateToProps, mapDispatchToProps)(ConnectStyle)

export default ConnectRedux
