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
import { graphql } from "react-apollo"
import PropTypes from "prop-types"

import { clearItems } from "../actions/cart"
import { countQuantity, countTotalPrice } from "../reducers/cart"
import { CREATE_CART } from "../mutations"

import Cart from "../components/Cart"

class CartPage extends Component {
  createCart(cart) {
    const cartParams = {
      items: cart.items.map((item) => ({ product_id: item.id, quantity: item.quantity }))
    }
    this.props.mutate({ variables: { cart: cartParams } })
      .then((result) => {
        this.props.cartActions.clearItems()
      }).catch((error) => {
        console.log("error", error)
      })
  }
  render() {
    const { cart, cleaItems } = this.props

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
