import React from "react"
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "material-ui/List"
import {
  IconButton
} from "material-ui"
import {
  Remove as RemoveIcon
} from "material-ui-icons"
import PropTypes from "prop-types"

const CartItem = ({ item, addItem, removeItem }) => {
  return (
    <ListItem
      key={item.id}
      onClick={() => addItem(item)}
      button
    >
      <ListItemText
        primary={item.name}
      />
      <ListItemText
        primary={item.quantity}
      />
      <ListItemText
        primary={item.price.human}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={() => removeItem(item)} color="primary">
          <RemoveIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
}

export default CartItem