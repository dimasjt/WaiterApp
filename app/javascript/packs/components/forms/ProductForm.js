import React from "react"
import { graphql } from "react-apollo"
import { Button } from "material-ui"
import { reduxForm } from "redux-form"
import PropTypes from "prop-types"

import { TextField, SelectField } from "../Fields"

import { GET_CATEGORIES } from "../../queries"

import { required } from "../../util/validations"

const ProductForm = ({ handleSubmit, data, invalid, submitting }) => {
  const categories = data.categories || []
  return (
    <form onSubmit={handleSubmit}>
      <TextField name="name" validate={required} />
      <TextField name="price" validate={required} />
      <TextField name="sku" label="SKU" />
      <TextField name="description" multiline />
      <SelectField name="category_id" label="Category" options={categories} />
      <Button
        onClick={handleSubmit}
        disabled={invalid || submitting}
      >
        Submit
      </Button>
    </form>
  )
}

ProductForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

const ConnectForm = reduxForm({
  form: "addProduct"
})(ProductForm)

const ConnectGraphQL = graphql(GET_CATEGORIES)(ConnectForm)

export default ConnectGraphQL
