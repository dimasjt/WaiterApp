import React, { Component } from "react"
import { withStyles } from "material-ui/styles"
import { graphql } from "react-apollo"
import PropTypes from "prop-types"

import ProductForm from "../components/forms/ProductForm"

import { CREATE_PRODUCT } from "../mutations"

const styles = (theme) => ({
  root: {
    padding: 12,
  },
})

class AddProductPage extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <ProductForm onSubmit={this.props.createProduct} />
      </div>
    )
  }
}

AddProductPage.propTypes = {
  classes: PropTypes.object.isRequired,
  createProduct: PropTypes.func.isRequired,
}

const ConnectStyle = withStyles(styles)(AddProductPage)

const ConnectGraphQL = graphql(CREATE_PRODUCT, {
  props: ({ mutate }) => ({
    createProduct(product) {
      mutate({ variables: { product } }).then(() => {
        console.log("success")
      })
    }
  })
})(ConnectStyle)

export default ConnectGraphQL
