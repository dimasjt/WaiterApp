import React, { Component } from "react"
import {
  Button,
} from "material-ui"
import { connect } from "react-redux"
import { graphql } from "react-apollo"
import PropTypes from "prop-types"

import { countQuantity, countTotalPrice } from "../reducers/cart"

import { GET_CART } from "../queries"

import Cart from "../components/Cart"

class DetailCartPage extends Component {
  render() {
    const { data } = this.props
    const cart = data.cart || {}

    if (data.loading) {
      return null
    }

    return (
      <div>
        <Cart
          cart={cart}
          newCart={false}
        />
        <Button raised>
          Pay
        </Button>
      </div>
    )
  }
}

DetailCartPage.propTypes = {
}

const mapStateToProps = (state) => state

const ConnectGraphQL = graphql(GET_CART, {
  options: ({ match }) => ({ variables: { id: match.params.id } }),
})(DetailCartPage)
const ConnectRedux = connect(mapStateToProps)(ConnectGraphQL)

export default ConnectRedux
