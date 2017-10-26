import React, { Component } from "react"
import { reduxForm } from "redux-form"
import { withStyles } from "material-ui/styles"
import { Button } from "material-ui"
import PropTypes from "prop-types"

import { TextField, SelectField } from "../components/Fields"

const styles = (theme) => ({
  root: {
    padding: 12,
  },
})

const options = [
  { id: 1, name: "Main" },
  { id: 2, name: "Drink" },
  { id: 3, name: "Beverage" },
  { id: 4, name: "Snack" },
]

class AddProductPage extends Component {
  render() {
    const { classes } = this.props

    return (
      <form className={classes.root}>
        <TextField name="name" />
        <TextField name="price" />
        <TextField name="sku" label="SKU" />
        <TextField name="description" multiline />
        <SelectField name="category_id" label="Category" options={options} />
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
