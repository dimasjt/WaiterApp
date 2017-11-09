import React, { Component } from "react"
import List, {
  ListItem,
  ListItemText,
} from "material-ui/List"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { countQuantity, countTotalPrice } from "../reducers/cart"
import { addItem, removeItem } from "../actions/cart"

import CartItem from "./CartItem"

class Cart extends Component {
  render() {
    const { quantity, totalPrice, newCart, items, addItem, removeItem } = this.props

    const itemsList = items.map((item) => (
      <CartItem
        key={item.id || item.product.id}
        item={item}
        newCart={newCart}
        addItem={addItem}
        removeItem={removeItem}
      />
    ))

    return (
      <List>
        {itemsList}
        <ListItem>
          <ListItemText primary="Total Price" />
          <ListItemText primary={`${quantity}`} />
          <ListItemText primary={totalPrice.human} />
        </ListItem>
      </List>
    )
  }
}

Cart.propTypes = {
  newCart: PropTypes.bool.isRequired,
  quantity: PropTypes.number,
  totalPrice: PropTypes.object,
  items: PropTypes.array,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
}

Cart.defaultProps = {
  cart: {
    items: [],
  },
}

const mapStateToProps = (state, { newCart, cart }) => {
  const items = cart.items || []

  return {
    ...state,
    items: items,
    quantity: countQuantity(items),
    totalPrice: countTotalPrice(items),
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (product) => dispatch(addItem(product)),
  removeItem: (product) => dispatch(removeItem(product)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
