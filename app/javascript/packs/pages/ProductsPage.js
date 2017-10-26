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
  ListItemSecondaryAction
} from "material-ui/List"
import {
  Folder as FolderIcon,
  Delete as DeleteIcon,
  ModeEdit as EditIcon,
} from "material-ui-icons"
import { graphql } from "react-apollo"
import PropTypes from "prop-types"

import { GET_PRODUCTS } from "../queries"

class ProductsPage extends Component {
  render() {
    const { products, loading } = this.props.data

    if (loading) { return null }

    const items = products.map((product) => (
      <ListItem button key={product.id}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={product.name}
          secondary={product.price.human}
        />
        <ListItemSecondaryAction>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
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
    products: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
}

export default graphql(GET_PRODUCTS)(ProductsPage)
