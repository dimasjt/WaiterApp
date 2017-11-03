import { gql } from "react-apollo"

export default gql`
  mutation createProduct($product: CreateProduct!, $image_id: ID) {
    createProduct(product: $product, image_id: $image_id) {
      id
    }
  }
`
