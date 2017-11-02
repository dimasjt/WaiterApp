import React, { Component } from "react"
import {
  Button,
  Grid,
} from "material-ui"
import { connect } from "react-redux"
import { graphql } from "react-apollo"
import { withStyles } from "material-ui/styles"
import PropTypes from "prop-types"

import { clearItems } from "../actions/cart"
import { CREATE_CART } from "../mutations"

import Cart from "../components/Cart"

const styleSheet = () => ({
  button: {
    width: "100%",
  },
})

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
    const { cart, clearItems, classes } = this.props

    return (
      <div>
        <Cart
          cart={cart}
          newCart
        />
        <Grid container>
          <Grid item xs={6}>
            <Button
              raised
              onClick={() => this.createCart(cart)}
              className={classes.button}
            >
              Serve
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              raised
              onClick={clearItems}
              className={classes.button}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

CartPage.propTypes = {
  cart: PropTypes.object.isRequired,
  clearItems: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
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

const ConnectStyle = withStyles(styleSheet)(CartPage)
const ConnectGraphQL = graphql(CREATE_CART)(ConnectStyle)
const ConnectRedux = connect(mapStateToProps, mapDispatchToProps)(ConnectGraphQL)

export default ConnectRedux
