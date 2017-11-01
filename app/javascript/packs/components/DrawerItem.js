import React from "react"
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from "material-ui/List"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const DrawerItem = ({ icon, label, to, toggleDrawer }) => {
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

DrawerItem.propTypes = {
  icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default DrawerItem
