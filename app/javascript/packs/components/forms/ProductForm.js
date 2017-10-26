import React from "react"
import { graphql } from "react-apollo"
import { Button } from "material-ui"
import { reduxForm } from "redux-form"
import PropTypes from "prop-types"

import { TextField, SelectField } from "../Fields"

import { GET_CATEGORIES } from "../../queries"

const ProductForm = ({ handleSubmit, data }) => {
  const categories = data.categories || []
  return (
    <form onSubmit={handleSubmit}>
      <TextField name="name" />
      <TextField name="price" />
      <TextField name="sku" label="SKU" />
      <TextField name="description" multiline />
      <SelectField name="category_id" label="Category" options={categories} />
      <Button onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  )
}

ProductForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

const ConnectForm = reduxForm({
  form: "addProduct"
})(ProductForm)

const ConnectGraphQL = graphql(GET_CATEGORIES)(ConnectForm)

export default ConnectGraphQL
