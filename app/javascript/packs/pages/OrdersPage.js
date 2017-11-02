import React, { Component } from "react"
import { graphql } from "react-apollo"
import List, {
  ListItem,
  ListItemText,
  ListSubheader,
} from "material-ui/List"
import PropTypes from "prop-types"

import { GET_ORDERS } from "../queries"

class OrdersPage extends Component {
  render() {
    const { data } = this.props
    const orders = data.orders || []

    const ordersList = orders.map((order) => (
      <ListItem key={order.id} button>
        <ListItemText
          primary={order.created_at.human}
          secondary={order.total.human}
        />
      </ListItem>
    ))

    return (
      <div>
        <List>
          <ListSubheader>
            Today
          </ListSubheader>
          {ordersList}
        </List>
      </div>
    )
  }
}

OrdersPage.propTypes = {
  data: PropTypes.object.isRequired,
}

const ConnectGraphQL = graphql(GET_ORDERS)(OrdersPage)

export default ConnectGraphQL
