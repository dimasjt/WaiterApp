import React, { Component } from "react"
import {
  Typography as Text,
  Grid,
  TextField,
  Button,
} from "material-ui"

class CheckoutPage extends Component {
  render() {
    return (
      <Grid container>
        <Grid>
          <Text>Rp340.000</Text>
        </Grid>
        <Grid>
          <TextField name="pay_cash" />
        </Grid>
        <Grid>
          <Text>Return</Text>
          <Text>Rp20.000</Text>
        </Grid>
        <Grid>
          <Button>
            Pay
          </Button>
        </Grid>
      </Grid>
    )
  }
}

export default CheckoutPage