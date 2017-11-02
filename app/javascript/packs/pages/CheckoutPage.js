import React, { Component } from "react"
import {
  Typography as Text,
  TextField,
  Button,
  Grid,
} from "material-ui"
import Table, {
  TableBody,
  TableCell,
  TableRow,
} from "material-ui/Table"
import { withStyles } from "material-ui/styles"
import { graphql, compose } from "react-apollo"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import money from "../util/money"

import { showFlash } from "../actions/flash"
import { GET_CART } from "../queries"
import { CREATE_ORDER } from "../mutations"

const styleSheet = (theme) => ({
  button: {
    width: "100%",
  },
  textField: {
    fontSize: "18px",
    textAlign: "end",
  },
  table: {
    marginTop: 15,
    marginBottom: 15,
  },
})

class CheckoutPage extends Component {
  state = { totalPay: 0 }

  createOrder = () => {
    const { mutate, dispatch } = this.props
    const order = {
      customer_name: "",
      total_pay: this.state.totalPay,
      cart_id: this.props.match.params.cart_id,
    }

    mutate({ variables: { order } })
      .then((result) => {
        dispatch(showFlash("Success create order"))
      }).catch((error) => {
        dispatch(showFlash(error.message))
      })
  }

  calculateReturn(totalPrice) {
    if (this.state.totalPay < totalPrice) {
      return money(0)
    }

    return money(this.state.totalPay - totalPrice)
  }

  render() {
    const { classes, data, history } = this.props
    const cart = data.cart || {}

    if (!data.cart) {
      return null
    }

    return (
      <div>
        <Table className={classes.table}>
          <TableBody>
            <TableRow>
              <TableCell>
                <Text type="title" align="left">
                  Total Price
                </Text>
              </TableCell>
              <TableCell>
                <Text type="title" align="right">
                  {cart.total_price.human}
                </Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <TextField
                  fullWidth
                  placeholder="Pay Cash..."
                  inputClassName={classes.textField}
                  type="number"
                  autoFocus
                  onChange={(event) => this.setState({ totalPay: event.target.value })}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text type="title" align="left">
                  Total Return
                </Text>
              </TableCell>
              <TableCell>
                <Text type="title" align="right">
                  {this.calculateReturn(cart.total_price.number)}
                </Text>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Grid container>
          <Grid item xs={6}>
            <Button
              raised
              className={classes.button}
              onClick={history.goBack}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              raised
              className={classes.button}
              onClick={this.createOrder}
              disabled={this.state.totalPay < cart.total_price.number}
            >
              Pay
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

CheckoutPage.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired,
}

const ConnectStyle = withStyles(styleSheet)(CheckoutPage)
const ConnectGraphQL = compose(
  graphql(GET_CART, {
    options: ({ match }) => ({ variables: { id: match.params.cart_id } }),
  }),
  graphql(CREATE_ORDER),
)(ConnectStyle)
const ConnectRedux = connect(state => state)(ConnectGraphQL)

export default ConnectRedux
