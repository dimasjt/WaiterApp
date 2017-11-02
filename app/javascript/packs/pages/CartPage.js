import React, { Component } from "react"
import {
  Button,
} from "material-ui"
import { connect } from "react-redux"
import { graphql } from "react-apollo"
import PropTypes from "prop-types"

import { clearItems } from "../actions/cart"
import { CREATE_CART } from "../mutations"

import Cart from "../components/Cart"

class CartPage extends Component {
  createCart(cart) {
    const cartParams = {
      items: cart.items.map((item) => ({ product_id: item.product.id, quantity: item.quantity })),
    }
    this.props.mutate({ variables: { cart: cartParams } })
      .then((result) => {
        this.props.clearItems()
      }).catch((error) => {
        console.log("error", error)
      })
  }
  render() {
    const { cart, clearItems } = this.props

    return (
      <div>
        <Cart
          cart={cart}
          newCart
        />
        <Button raised onClick={() => this.createCart(cart)}>
          Serve
        </Button>
        <Button raised onClick={clearItems}>
          Clear
        </Button>
      </div>
    )
  }
}

CartPage.propTypes = {
  cart: PropTypes.object.isRequired,
  clearItems: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  const cart = state.cart.toJS()

  return {
    ...state,
    cart: cart,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearItems: () => dispatch(clearItems()),
})

const ConnectGraphQL = graphql(CREATE_CART)(CartPage)
const ConnectRedux = connect(mapStateToProps, mapDispatchToProps)(ConnectGraphQL)

export default ConnectRedux
