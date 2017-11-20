import React, { Component } from "react"
import {
  List,
  Avatar,
  IconButton,
  Typography,
} from "material-ui"
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from "material-ui/List"
import {
  Remove as RemoveIcon,
} from "material-ui-icons"
import { graphql, compose } from "react-apollo"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { withStyles } from "material-ui/styles"
import PropTypes from "prop-types"

import { GET_PRODUCTS } from "../queries"
import * as cartActions from "../actions/cart"

import SearchProduct from "../components/SearchProduct"

const styleSheet = () => ({
  removeContainer: {
    display: "flex",
    alignItems: "center",
  },
  notAvailable: {
    backgroundColor: "#b5b5b5",
  },
})

class HomePage extends Component {
  state = { query: "", category: "all" }

  showRemoveButton(product) {
    const { cart, classes } = this.props

    const productIndex = cart.get("items").findIndex((item) => item.getIn(["product", "id"]) === product.id)
    if (productIndex < 0) { return null }

    const quantity = cart.getIn(["items", productIndex, "quantity"])

    return (
      <ListItemSecondaryAction className={classes.removeContainer}>
        <Typography type="body1">{quantity}</Typography>
        <IconButton onClick={() => this.props.cartActions.removeItem(product)} color="primary">
          <RemoveIcon />
        </IconButton>
      </ListItemSecondaryAction>
    )
  }

  filteredProducts() {
    let products = this.props.productQuery.products || []
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

  addItem = (product) => {
    return () => {
      if (product.in_stock) {
        this.props.cartActions.addItem(product)
      }
    }
  }

  render() {
    const { classes } = this.props

    const productsList = this.filteredProducts().map((product) => {
      const className = product.in_stock ? "" : classes.notAvailable
      const productName = product.in_stock ? product.name : `(unavailable) ${product.name}`

      return (
        <ListItem
          button
          onClick={this.addItem(product)}
          key={product.id}
          className={className}
        >
          <ListItemAvatar>
            <Avatar alt={product.name} src={product.image.thumb} />
          </ListItemAvatar>
          <ListItemText
            primary={productName}
            secondary={product.price.human}
          />
          {this.showRemoveButton(product)}
        </ListItem>
      )
    })

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
          {productsList}
        </List>
      </div>
    )
  }
}

HomePage.propTypes = {
  productQuery: PropTypes.object,
  cartActions: PropTypes.object.isRequired,
  cart: PropTypes.object,
  classes: PropTypes.object,
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => ({
  cartActions: bindActionCreators(cartActions, dispatch),
})

const ConnectStyle = withStyles(styleSheet)(HomePage)
const ConnectRedux = connect(mapStateToProps, mapDispatchToProps)(ConnectStyle)

export default compose(graphql(GET_PRODUCTS, {
  name: "productQuery",
  options: { fetchPolicy: "network-only", variables: { scope: "all" } },
}))(ConnectRedux)
