import { gql } from "react-apollo"

export default gql`
  mutation createProduct($product: CreateProduct!) {
    createProduct(product: $product) {
      id
    }
  }
`
