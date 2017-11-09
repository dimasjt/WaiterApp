import React, { Component } from "react"
import {
  List,
  Avatar,
  IconButton,
} from "material-ui"
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from "material-ui/List"
import {
  Delete as DeleteIcon,
  ModeEdit as EditIcon,
} from "material-ui-icons"
import { graphql, compose } from "react-apollo"
import PropTypes from "prop-types"

import { GET_PRODUCTS } from "../queries"
import { DELETE_PRODUCT } from "../mutations"

import confirm from "../util/confirm"

class ProductsPage extends Component {
  state = {
    openDialog: false,
  }

  onRequestClose = (value) => {
    console.log(value)
    this.setState({ openDialog: false })
  }

  handleConfirm = () => {
    confirm().then(() => {
      console.log("OK")
    }, () => {
      console.log("Cancel")
    })
  }

  render() {
    const { products, loading } = this.props.data

    if (loading) { return null }

    const items = products.map((product) => (
      <ListItem button key={product.id}>
        <ListItemAvatar>
          <Avatar src={product.image.small} />
        </ListItemAvatar>
        <ListItemText
          primary={product.name}
          secondary={product.price.human}
        />
        <ListItemSecondaryAction>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => this.props.deleteProduct(product.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))
    return (
      <div>
        <List>
          {items}
        </List>
      </div>
    )
  }
}

ProductsPage.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    products: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  deleteProduct: PropTypes.func.isRequired,
}

export default compose(
  graphql(GET_PRODUCTS),
  graphql(DELETE_PRODUCT, {
    props: ({ ownProps, mutate }) => ({
      deleteProduct(id) {
        confirm().then(() => {
          mutate({ variables: { id } }).then(() => {
            ownProps.data.refetch()
          })
        }, () => { })
      },
    }),
  }),
)(ProductsPage)
