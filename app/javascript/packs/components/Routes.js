import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { AppBar, Toolbar, IconButton } from "material-ui"
import { Menu as MenuIcon } from "material-ui-icons"

import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"

const Routes = () => (
  <Router basename="/app">
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
      </Switch >
    </div>
  </Router>
)

export default Routes
