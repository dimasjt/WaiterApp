import React from "react"
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "material-ui/List"
import {
  IconButton,
} from "material-ui"
import {
  Remove as RemoveIcon,
} from "material-ui-icons"
import PropTypes from "prop-types"

const CartItem = ({ item, addItem, removeItem, newCart }) => {
  const addItemToCart = () => {
    if (!newCart) { return }
    addItem(item.product)
  }

  return (
    <ListItem
      key={item.id}
      onClick={addItemToCart}
      button={newCart}
    >
      <ListItemText
        primary={item.product.name}
      />
      <ListItemText
        primary={item.quantity}
      />
      <ListItemText
        primary={item.product.price.human}
      />
      {newCart && <ListItemSecondaryAction>
        <IconButton onClick={() => removeItem(item.product)} color="primary">
          <RemoveIcon />
        </IconButton>
      </ListItemSecondaryAction>}
    </ListItem>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    quantity: PropTypes.number.isRequired,
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.shape({
        number: PropTypes.number.isRequired,
        human: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }).isRequired,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
  newCart: PropTypes.bool.isRequired,
}

export default CartItem
