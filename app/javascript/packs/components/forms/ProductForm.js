import React, { Component } from "react"
import { graphql } from "react-apollo"
import { Button } from "material-ui"
import { reduxForm } from "redux-form"
import PropTypes from "prop-types"

import { TextField, SelectField, Upload } from "../Fields"

import { GET_CATEGORIES } from "../../queries"

import { required } from "../../util/validations"

class ProductForm extends Component {
  render() {
    const { handleSubmit, data, invalid, submitting, uploadSuccess, uploadError } = this.props
    const categories = data.categories || []

    return (
      <form onSubmit={handleSubmit}>
        <TextField name="name" validate={required} />
        <TextField name="price" validate={required} />
        <TextField name="sku" label="SKU" />
        <TextField name="description" multiline />
        <label>Category</label>
        <SelectField name="category_id" label="Category" options={categories} />
        <Upload
          onSuccess={uploadSuccess}
          onError={uploadError}
        />
        <Button
          onClick={handleSubmit}
          disabled={invalid || submitting}
        >
          Submit
          </Button>
      </form>
    )
  }
}

ProductForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  uploadError: PropTypes.func,
  uploadSuccess: PropTypes.func,
}

const ConnectForm = reduxForm({
  form: "addProduct",
})(ProductForm)

const ConnectGraphQL = graphql(GET_CATEGORIES)(ConnectForm)

export default ConnectGraphQL
