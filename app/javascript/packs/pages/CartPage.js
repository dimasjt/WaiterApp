import React, { Component } from "react"
import {
  Button,
  Grid,
  TextField,
} from "material-ui"
import { connect } from "react-redux"
import { graphql } from "react-apollo"
import { withStyles } from "material-ui/styles"
import PropTypes from "prop-types"

import { clearItems } from "../actions/cart"
import { showFlash } from "../actions/flash"
import { CREATE_CART } from "../mutations"

import Cart from "../components/Cart"

const styleSheet = () => ({
  button: {
    width: "100%",
  },
})

class CartPage extends Component {
  state = { tableNumber: "" }

  createCart(cart) {
    const { clearItems, showFlash } = this.props
    const cartParams = {
      items: cart.items.map((item) => ({ product_id: item.product.id, quantity: item.quantity })),
      table_number: this.state.tableNumber,
    }

    this.props.mutate({ variables: { cart: cartParams } })
      .then((result) => {
        clearItems()
        this.setState({ tableNumber: "" })
        showFlash("Success save the cart")
      }).catch((error) => {
        showFlash(error.message)
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
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="Table Number"
              onChange={(event) => this.setState({ tableNumber: event.target.value })}
              value={this.state.tableNumber}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              raised
              onClick={() => this.createCart(cart)}
              className={classes.button}
              disabled={!cart.items.length}
            >
              Serve
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              raised
              onClick={clearItems}
              className={classes.button}
              disabled={!cart.items.length}
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
  showFlash: PropTypes.func.isRequired,
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
  showFlash: (msg) => dispatch(showFlash(msg)),
})

const ConnectStyle = withStyles(styleSheet)(CartPage)
const ConnectGraphQL = graphql(CREATE_CART)(ConnectStyle)
const ConnectRedux = connect(mapStateToProps, mapDispatchToProps)(ConnectGraphQL)

export default ConnectRedux
