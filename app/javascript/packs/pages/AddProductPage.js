import React, { Component } from "react"
import { withStyles } from "material-ui/styles"
import { graphql } from "react-apollo"
import { connect } from "react-redux"
import { reset } from "redux-form"
import PropTypes from "prop-types"

import ProductForm from "../components/forms/ProductForm"

import { CREATE_PRODUCT } from "../mutations"
import { showFlash } from "../actions/flash"

const styles = (theme) => ({
  root: {
    padding: 12,
  },
})

class AddProductPage extends Component {
  state = { imageId: null }

  uploadSuccess = (data) => {
    this.setState({ imageId: data.image.id })
  }
  uploadError = (_error) => {
    this.props.showFlash("Something error")
  }
  createProduct = async (product) => {
    const { resetForm, showFlash, mutate } = this.props

    try {
      await mutate({ variables: { product } })
      resetForm()
      showFlash("Success create product")
    } catch (error) {
      showFlash("Failed to create product")
    }
  }
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <ProductForm
          onSubmit={this.createProduct}
          uploadSuccess={this.uploadSuccess}
          uploadError={this.uploadError}
        />
      </div>
    )
  }
}

AddProductPage.propTypes = {
  classes: PropTypes.object.isRequired,
  mutate: PropTypes.func,
  showFlash: PropTypes.func,
}

const ConnectStyle = withStyles(styles)(AddProductPage)
const ConnectRedux = connect(undefined, (dispatch) => ({
  showFlash: (message) => dispatch(showFlash(message)),
  resetForm: () => dispatch(reset("addProduct")),
}))(ConnectStyle)
const ConnectGraphQL = graphql(CREATE_PRODUCT)(ConnectRedux)

export default ConnectGraphQL
