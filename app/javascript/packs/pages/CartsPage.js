import React, { Component } from "react"
import {
  List,
} from "material-ui"
import {
  ListItem,
  ListItemText,
} from "material-ui/List"
import { connect } from "react-redux"
import { graphql } from "react-apollo"
import PropTypes from "prop-types"

import { GET_CARTS } from "../queries"

class CartsPage extends Component {
  render() {
    const { data, history } = this.props
    const carts = data.carts || []

    const itemsList = carts.map((item) => (
      <ListItem key={item.id} button onClick={() => history.push(`/carts/${item.id}`)}>
        <ListItemText
          primary={`Table ${item.id}`}
          secondary={item.total_price.human}
        />
      </ListItem>
    ))

    return (
      <div>
        <List>
          {itemsList}
        </List>
      </div>
    )
  }
}

CartsPage.propTypes = {
  data: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({
  // cartActions: bindActionCreators(cartActions, dispatch),
})

const ConnectGraphQL = graphql(GET_CARTS)(CartsPage)
const ConnectRedux = connect(mapStateToProps)(ConnectGraphQL)

export default ConnectRedux
