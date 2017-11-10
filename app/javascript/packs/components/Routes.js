import React, { Component } from "react"
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "material-ui"
import {
  Menu as MenuIcon,
  Add as AddIcon,
  ShoppingCart as CartIcon,
} from "material-ui-icons"
import { withStyles } from "material-ui/styles"
import PropTypes from "prop-types"

import AppDrawer from "./AppDrawer"
import Flash from "./Flash"

import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"
import AddProductPage from "../pages/AddProductPage"
import CartPage from "../pages/CartPage"
import CartsPage from "../pages/CartsPage"
import DetailCartPage from "../pages/DetailCartPage"
import CheckoutPage from "../pages/CheckoutPage"
import OrdersPage from "../pages/OrdersPage"
import ProductPage from "../pages/ProductPage"

const styleSheet = () => ({
  container: {
    padding: 10,
    paddingTop: 0,
  },
  title: {
    flex: 1,
  },
})

class Routes extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  state = {
    open: false,
  }

  toggleDrawer = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    const { classes } = this.props

    return (
      <Router basename="/app">
        <div>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton onClick={this.toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Typography type="title" className={classes.title}>
                Title
              </Typography>
              <Link to="/products/new">
                <IconButton>
                  <AddIcon />
                </IconButton>
              </Link>
              <Link to="/cart">
                <IconButton>
                  <CartIcon />
                </IconButton>
              </Link>
            </Toolbar>
          </AppBar>

          <AppDrawer
            toggleDrawer={this.toggleDrawer}
            open={this.state.open}
          />

          <div className={classes.container}>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/products" component={ProductsPage} />
              <Route path="/products/new" component={AddProductPage} />
              <Route path="/products/:id" component={ProductPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/carts" component={CartsPage} exact />
              <Route path="/carts/:id" component={DetailCartPage} />
              <Route path="/checkout/:cart_id" component={CheckoutPage} />
              <Route path="/orders" component={OrdersPage} />
            </Switch >
          </div>

          <Flash />
        </div>
      </Router>
    )
  }
}

export default withStyles(styleSheet)(Routes)
