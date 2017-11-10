import React from "react"
import {
  IconButton,
} from "material-ui"
import {
  Delete as DeleteIcon,
} from "material-ui-icons"
import { connect } from "react-redux"
import { graphql } from "react-apollo"
import PropTypes from "prop-types"

import confirm from "../../util/confirm"

import { showFlash } from "../../actions/flash"
import { DELETE_PRODUCT } from "../../mutations"

const DeleteProductButton = ({ id, mutate, showFlash, onSuccess }) => {
  const deleteProduct = () => {
    confirm().then(() => {
      mutate({ variables: { id } })
        .then(() => {
          onSuccess()
          showFlash("Product deleted.")
        })
        .catch(() => {
          showFlash("Failed to delete product.")
        })
    }, () => { })
  }

  return (
    <IconButton onClick={() => deleteProduct(id)}>
      <DeleteIcon />
    </IconButton>
  )
}

DeleteProductButton.propTypes = {
  id: PropTypes.string,
  mutate: PropTypes.func,
  showFlash: PropTypes.func,
  onSuccess: PropTypes.func,
}

const ConnectGraphQL = graphql(DELETE_PRODUCT)(DeleteProductButton)

export default connect(undefined, (dispatch, ownProps) => ({
  showFlash: (msg) => dispatch(showFlash(msg)),
}))(ConnectGraphQL)
