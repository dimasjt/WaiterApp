import React from "react"
import { Drawer, List, Divider } from "material-ui"
import {
  Dashboard as DashboardIcon,
  ShoppingBasket as OrdersIcon,
  List as ListIcon,
  Settings as SettingsIcon,
  ExitToApp as ExitIcon,
} from "material-ui-icons"
import PropTypes from "prop-types"

import DrawerItem from "./DrawerItem"

const AppDrawer = ({ open, toggleDrawer }) => (
  <Drawer
    open={open}
    onRequestClose={toggleDrawer}
  >
    <List>
      <DrawerItem label="Dashboard" icon={DashboardIcon} to="/home" />
      <DrawerItem label="Orders" icon={OrdersIcon} to="/orders" />
      <DrawerItem label="Products" icon={ListIcon} to="/products" />
      <DrawerItem label="Settings" icon={SettingsIcon} to="/settings" />
      <Divider />
      <DrawerItem label="Logout" icon={ExitIcon} to="/logout" />
    </List>
  </Drawer>
)

AppDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
}

export default AppDrawer
