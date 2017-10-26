import React, { Component } from "react"
import { reduxForm } from "redux-form"
import { withStyles } from "material-ui/styles"
import { Button } from "material-ui"
import PropTypes from "prop-types"

import { TextField } from "../components/Fields"

const styles = (theme) => ({
  root: {
    padding: 12,
  },
})

class AddProductPage extends Component {
  render() {
    const { classes } = this.props

    return (
      <form className={classes.root}>
        <TextField name="name" />
        <TextField name="price" />
        <TextField name="sku" label="SKU" />
        <TextField name="description" multiline />
        <Button>
          Submit
        </Button>
      </form>
    )
  }
}

AddProductPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

const ConnectForm = reduxForm({
  form: "addProduct"
})(AddProductPage)

const ConnectStyle = withStyles(styles)(ConnectForm)

export default ConnectStyle
