import React, { Component } from "react"
import {
  List,
  Avatar,
  IconButton,
} from "material-ui"
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction
} from "material-ui/List"
import {
  Folder as FolderIcon,
  Delete as DeleteIcon,
  ModeEdit as EditIcon,
} from "material-ui-icons"

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

class ProductsPage extends Component {
  render() {
    const items = list.map((i) => (
      <ListItem button key={i}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={`Product name ${i}`}
          secondary="Price Rp. 40.000"
        />
        <ListItemSecondaryAction>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))
    return (
      <div>
        <List>
          {items}
        </List>
      </div>
    )
  }
}

export default ProductsPage
