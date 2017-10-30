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
  Remove as RemoveIcon,
} from "material-ui-icons"
import { graphql } from "react-apollo"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PropTypes from "prop-types"

import { GET_PRODUCTS } from "../queries"
import * as cartActions from "../actions/cart"

class HomePage extends Component {
  render() {
    const products = this.props.data.products || []
    const { addItem } = this.props.cartActions

    const productsList = products.map((product) => (
      <ListItem button onClick={() => addItem(product)} key={product.id}>
        <ListItemAvatar>
          <Avatar alt={product.name} src={product.image.thumb} />
        </ListItemAvatar>
        <ListItemText
          primary={product.name}
          secondary={product.price.human}
        />
        <ListItemSecondaryAction>
          <IconButton>
            <RemoveIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))

    return (
      <div>
        <List>
          {productsList}
        </List>
      </div>
    )
  }
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
  cartActions: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => ({
  cartActions: bindActionCreators(cartActions, dispatch),
})

const ConnectRedux = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default graphql(GET_PRODUCTS)(ConnectRedux)
