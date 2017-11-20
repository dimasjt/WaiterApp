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
  ModeEdit as EditIcon,
} from "material-ui-icons"
import { graphql, compose } from "react-apollo"
import PropTypes from "prop-types"

import { GET_PRODUCTS } from "../queries"
import { DELETE_PRODUCT } from "../mutations"

import confirm from "../util/confirm"

import SearchProduct from "../components/SearchProduct"
import DeleteProductButton from "../components/buttons/DeleteProductButton"

class ProductsPage extends Component {
  state = {
    openDialog: false,
    query: "",
    category: "all",
  }

  handleConfirm = () => {
    confirm().then(() => {
      console.log("OK")
    }, () => {
      console.log("Cancel")
    })
  }

  filteredProducts() {
    let products = this.props.data.products || []
    products = products.filter((product) => {
      let categoryMatch
      if (this.state.category !== "all") {
        categoryMatch = product.category_id === this.state.category
      } else {
        categoryMatch = true
      }

      return product.name.toLowerCase().match(this.state.query) && categoryMatch
    })
    return products
  }

  render() {
    const { data, history } = this.props

    if (data.loading) { return null }

    const items = this.filteredProducts().map((product) => (
      <ListItem button key={product.id} onClick={() => history.push(`/products/${product.id}`)}>
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
          <DeleteProductButton
            id={product.id}
            onSuccess={() => data.refetch()}
          />
        </ListItemSecondaryAction>
      </ListItem>
    ))
    return (
      <div>
        <SearchProduct
          query={this.state.query}
          clearQuery={() => this.setState({ query: "" })}
          queryChange={(value) => this.setState({ query: value })}
          category={this.state.category}
          categoryChange={(value) => this.setState({ category: value })}
        />
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
  history: PropTypes.object,
}

export default compose(
  graphql(GET_PRODUCTS, { options: { variables: { scope: "all" }, fetchPolicy: "network-only" } }),
  graphql(DELETE_PRODUCT, { name: "mutateDelete" }),
)(ProductsPage)
