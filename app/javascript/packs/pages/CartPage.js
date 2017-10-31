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
import { countQuantity, countTotalPrice } from "../reducers/cart"

const styleSheet = (theme) => ({
  container: {
    paddingLeft: 15,
  },
  action: {
    left: "8px",
    marginTop: "-17px",
  },
  button: {
    width: 32,
    height: 32,
    backgroundColor: "orange",
    color: "white",
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
  quantity: {
    padding: "0 0 0 32px",
  },
})

class CartPage extends Component {
  render() {
    const { cart, classes, quantity, totalPrice } = this.props
    const { addItem, removeItem } = this.props.cartActions
    const { items } = cart

    const itemsList = items.map((item) => (
      <ListItem
        key={item.id}
        classes={{ root: classes.container }}
        onClick={() => addItem(item)}
        button
      >
        <ListItemText
          primary={item.name}
          className={classes.product}
          classes={{ root: classes.info }}
        />
        <ListItemText
          primary={item.quantity}
        />
        <ListItemText
          primary={item.price.human}
          className={classes.price}
        />
        <ListItemSecondaryAction>
          <IconButton onClick={() => removeItem(item)} color="primary">
            <RemoveIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))

    return (
      <div>
        <List>
          {itemsList}
          <ListItem>
            <ListItemText primary="Total Price" />
            <ListItemText primary={`${quantity}`} />
            <ListItemText primary={totalPrice.human} />
          </ListItem>
        </List>
        <Button raised primary>
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

const mapStateToProps = (state) => {
  const cart = state.cart.toJS()
  const items = cart.items

  return {
    ...state,
    cart: cart,
    totalPrice: countTotalPrice(items),
    quantity: countQuantity(items),
  }
}

const mapDispatchToProps = (dispatch) => ({
  cartActions: bindActionCreators(cartActions, dispatch),
})

const ConnectStyle = withStyles(styleSheet)(CartPage)
const ConnectRedux = connect(mapStateToProps, mapDispatchToProps)(ConnectStyle)

export default ConnectRedux
