import React, { Component } from "react"
import {
  List,
  Button,
} from "material-ui"
import {
  ListItem,
  ListItemText,
} from "material-ui/List"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PropTypes from "prop-types"

import * as cartActions from "../actions/cart"
import { countQuantity, countTotalPrice } from "../reducers/cart"

import CartItem from "../components/CartItem"

class CartPage extends Component {
  render() {
    const { cart, quantity, totalPrice } = this.props
    const { clearItems } = this.props.cartActions
    const { items } = cart

    const itemsList = items.map((item) => (
      <CartItem
        key={item.id}
        item={item}
        {...this.props.cartActions}
      />
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
          Serve
        </Button>
        <Button raised primary onClick={clearItems}>
          Clear
        </Button>
      </div>
    )
  }
}

CartPage.propTypes = {
  cart: PropTypes.object.isRequired,
  cartActions: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  totalPrice: PropTypes.object.isRequired,
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

const ConnectRedux = connect(mapStateToProps, mapDispatchToProps)(CartPage)

export default ConnectRedux
