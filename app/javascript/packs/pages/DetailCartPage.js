import React, { Component } from "react"
import {
  Button,
} from "material-ui"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { graphql } from "react-apollo"
import PropTypes from "prop-types"

import * as cartActions from "../actions/cart"
import { countQuantity, countTotalPrice } from "../reducers/cart"

import { GET_CART } from "../queries"

import Cart from "../components/Cart"

class DetailCartPage extends Component {
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
    const { data, cartActions } = this.props
    const cart = data.cart || {}
    const { clearItems } = cartActions

    if (data.loading) {
      return null
    }

    console.log(cart)

    return (
      <div>
        <Cart
          cart={cart}
          quantity={cart.quantity || 0}
          totalPrice={cart.total_price}
          newCart={false}
          cartActions={cartActions}
        />
        <Button raised primary onClick={() => this.createCart(cart)}>
          Serve
        </Button>
        <Button raised primary onClick={clearItems}>
          Clear
        </Button>
      </div>
    )
  }
}

DetailCartPage.propTypes = {
  cartActions: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({
  cartActions: bindActionCreators(cartActions, dispatch),
})

const ConnectGraphQL = graphql(GET_CART, {
  options: ({ match }) => ({ variables: { id: match.params.id } }),
})(DetailCartPage)
const ConnectRedux = connect(mapStateToProps, mapDispatchToProps)(ConnectGraphQL)

export default ConnectRedux
