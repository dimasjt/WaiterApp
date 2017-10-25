import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"

const Routes = () => (
  <Router basename="/app">
    <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/products" component={ProductsPage} />
    </Switch >
  </Router>
)

export default Routes
