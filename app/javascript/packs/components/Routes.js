import React, { Component } from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  Divider,
} from "material-ui"
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from "material-ui/List"
import { Menu as MenuIcon } from "material-ui-icons"

import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"

const AppDrawer = ({ open, toggleDrawer }) => (
  <Drawer
    open={open}
    onRequestClose={toggleDrawer}
  >
    <List>
      <ListItem button>
        <ListItemIcon>
          <MenuIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </List>
  </Drawer>
)

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
          <AppBar position="static">
            <Toolbar>
              <IconButton onClick={this.toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <AppDrawer
            toggleDrawer={this.toggleDrawer}
            open={this.state.open}
          />

          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/products" component={ProductsPage} />
          </Switch >
        </div>
      </Router>
    )
  }
}

export default Routes
