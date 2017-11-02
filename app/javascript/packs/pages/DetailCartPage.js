import React, { Component } from "react"
import {
  Button,
  Grid,
} from "material-ui"
import { connect } from "react-redux"
import { graphql } from "react-apollo"
import { withStyles } from "material-ui/styles"
import PropTypes from "prop-types"

import { GET_CART } from "../queries"

import Cart from "../components/Cart"

const styleSheet = () => ({
  button: {
    width: "100%",
  },
})

class DetailCartPage extends Component {
  render() {
    const { data, history, classes } = this.props
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
        <Grid container>
          <Grid xs={6}>
            <Button
              raised
              onClick={() => history.push("/carts")}
              className={classes.button}
            >
              Back
            </Button>
          </Grid>
          <Grid xs={6}>
            <Button
              raised
              onClick={() => history.push(`/checkout/${cart.id}`)}
              className={classes.button}
            >
              Pay
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

DetailCartPage.propTypes = {
  data: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => state

const ConnectStyle = withStyles(styleSheet)(DetailCartPage)
const ConnectGraphQL = graphql(GET_CART, {
  options: ({ match }) => ({ variables: { id: match.params.id } }),
})(ConnectStyle)
const ConnectRedux = connect(mapStateToProps)(ConnectGraphQL)

export default ConnectRedux
