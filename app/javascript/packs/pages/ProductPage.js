import React, { Component } from "react"
import Table, { TableBody, TableCell, TableRow } from "material-ui/Table"
import {
  IconButton,
} from "material-ui"
import {
  ModeEdit as EditIcon,
} from "material-ui-icons"
import { graphql } from "react-apollo"
import { withStyles } from "material-ui/styles"
import PropTypes from "prop-types"

import { GET_PRODUCT } from "../queries"

import DeleteProductButton from "../components/buttons/DeleteProductButton"

const styleSheet = () => ({
  center: {
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
  },
})

class ProductPage extends Component {
  render() {
    const { data, classes, history } = this.props
    const product = data.product

    if (!product) {
      return null
    }

    return (
      <div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>
                <img
                  src={product.image.small}
                  alt={product.name}
                  className={classes.image}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{product.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Price</TableCell>
              <TableCell>{product.price.human}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell>{product.sku}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>{product.category_name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>{product.description}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.center} colSpan={2}>
                <DeleteProductButton
                  id={product.id}
                  onSuccess={() => history.replace("/products")}
                />
                <IconButton>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )
  }
}

ProductPage.propTypes = {
  data: PropTypes.object,
  classes: PropTypes.object,
  history: PropTypes.object,
}

const ConnectStyle = withStyles(styleSheet)(ProductPage)

export default graphql(GET_PRODUCT, {
  options: ({ match }) => ({ variables: { id: match.params.id } }),
})(ConnectStyle)
