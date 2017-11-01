import React from "react"
import { Drawer, List, Divider } from "material-ui"
import {
  Dashboard as DashboardIcon,
  ShoppingBasket as OrdersIcon,
  List as ListIcon,
  Settings as SettingsIcon,
  ExitToApp as ExitIcon,
  ShoppingCart as CartIcon,
} from "material-ui-icons"
import PropTypes from "prop-types"

import DrawerItem from "./DrawerItem"

const AppDrawer = ({ open, toggleDrawer }) => {
  const Item = ({ ...props }) => (
    <DrawerItem {...props} toggleDrawer={toggleDrawer} />
  )
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
