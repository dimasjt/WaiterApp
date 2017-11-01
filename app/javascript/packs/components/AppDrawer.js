import React from "react"
import { Drawer, List, Divider } from "material-ui"
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from "material-ui/List"
import {
  Dashboard as DashboardIcon,
  ShoppingBasket as OrdersIcon,
  List as ListIcon,
  Settings as SettingsIcon,
  ExitToApp as ExitIcon,
  ShoppingCart as CartIcon,
} from "material-ui-icons"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const AppDrawer = ({ open, toggleDrawer }) => {
  const Item = ({ icon, label, to }) => {
    const Icon = icon

    return (
      <ListItem button component={Link} to={to} onClick={toggleDrawer}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    )
  }

  return (
    <Drawer
      open={open}
      onRequestClose={toggleDrawer}
    >
      <List>
        <Item label="Dashboard" icon={DashboardIcon} to="/home" />
        <Item label="Orders" icon={OrdersIcon} to="/orders" />
        <Item label="Carts" icon={CartIcon} to="/carts" />
        <Item label="Products" icon={ListIcon} to="/products" />
        <Item label="Settings" icon={SettingsIcon} to="/settings" />
        <Divider />
        <Item label="Logout" icon={ExitIcon} to="/logout" />
      </List>
    </Drawer>
  )
}

AppDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
}

export default AppDrawer
