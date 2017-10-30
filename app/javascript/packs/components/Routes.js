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

import AppDrawer from "./AppDrawer"

import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"
import AddProductPage from "../pages/AddProductPage"
import CartPage from "../pages/CartPage"

class Routes extends Component {
  state = {
    open: false,
  }

  toggleDrawer = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
      <Router basename="/app">
        <div>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton onClick={this.toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Typography type="title">
                Title
              </Typography>
              <Link to="/products/new" component={IconButton}>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </Link>
              <Link to="/cart" component={IconButton}>
                <CartIcon />
              </Link>
            </Toolbar>
          </AppBar>

          <AppDrawer
            toggleDrawer={this.toggleDrawer}
            open={this.state.open}
          />

          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/products" component={ProductsPage} />
            <Route path="/products/new" component={AddProductPage} />
            <Route path="/cart" component={CartPage} />
          </Switch >
        </div>
      </Router>
    )
  }
}

export default Routes
