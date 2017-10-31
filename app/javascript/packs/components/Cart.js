import React, { Component } from "react"
import List, {
  ListItem,
  ListItemText,
} from "material-ui/List"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { countQuantity, countTotalPrice } from "../reducers/cart"

import CartItem from "./CartItem"

class Cart extends Component {
  render() {
    const { quantity, totalPrice, cart, newCart } = this.props

    const itemsList = cart.items.map((item) => (
      <CartItem
        key={item.id}
        item={item}
        newCart={newCart}
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
  cart: PropTypes.shape({
    items: PropTypes.array
  }),
}

Cart.defaultProps = {
  cart: {
    items: [],
  },
}

const mapStateToProps = (state) => {
  return {
    ...state,
    quantity: countQuantity(state),
    totalPrice: countTotalPrice(state)
  }
}

export default connect(mapStateToProps)(Cart)
