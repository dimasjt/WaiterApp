import React, { Component } from "react"
import {
  Typography as Text,
  TextField,
  Button,
} from "material-ui"
import Table, {
  TableBody,
  TableCell,
  TableRow,
} from "material-ui/Table"
import { withStyles } from "material-ui/styles"
import { graphql } from "react-apollo"
import PropTypes from "prop-types"

import money from "../util/money"

import { GET_CART } from "../queries"

const styleSheet = (theme) => ({
  button: {
    width: "100%",
  },
  textField: {
    fontSize: "18px",
    textAlign: "end",
  },
})

class CheckoutPage extends Component {
  state = { payCash: 0 }

  calculateReturn(totalPrice) {
    console.log(totalPrice)
    if (this.state.payCash < totalPrice) {
      return money(0)
    }

    return money(this.state.payCash - totalPrice)
  }

  render() {
    const { classes, data } = this.props
    const cart = data.cart || {}

    if (!data.cart) {
      return null
    }

    return (
      <div>
        <Table>
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
                  onChange={(event) => this.setState({ payCash: event.target.value })}
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
        <div>
          <Button raised className={classes.button}>
            Pay
          </Button>
        </div>
      </div>
    )
  }
}

CheckoutPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

const ConnectStyle = withStyles(styleSheet)(CheckoutPage)
const ConnectGraphQL = graphql(GET_CART, {
  options: ({ match }) => ({ variables: { id: match.params.cart_id } }),
})(ConnectStyle)

export default ConnectGraphQL
