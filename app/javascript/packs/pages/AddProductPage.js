import React, { Component } from "react"
import { reduxForm } from "redux-form"
import { withStyles } from "material-ui/styles"
import { Button } from "material-ui"
import { compose, graphql } from "react-apollo"
import PropTypes from "prop-types"

import { TextField, SelectField } from "../components/Fields"

import { GET_CATEGORIES } from "../queries"

const styles = (theme) => ({
  root: {
    padding: 12,
  },
})

class AddProductPage extends Component {
  render() {
    const { classes, data } = this.props
    const categories = data.categories || []

    return (
      <form className={classes.root}>
        <TextField name="name" />
        <TextField name="price" />
        <TextField name="sku" label="SKU" />
        <TextField name="description" multiline />
        <SelectField name="category_id" label="Category" options={categories} />
        <Button>
          Submit
        </Button>
      </form>
    )
  }
}

AddProductPage.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.shape({
    categories: PropTypes.array.isRequired,
  }),
}

const ConnectForm = reduxForm({
  form: "addProduct"
})(AddProductPage)

const ConnectStyle = withStyles(styles)(ConnectForm)

const ConnectGraphQL = compose(
  graphql(GET_CATEGORIES)
)(ConnectStyle)

export default ConnectGraphQL
