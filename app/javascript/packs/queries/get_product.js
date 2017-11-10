import { gql } from "react-apollo"

export default gql`
  query product($id: ID!) {
    product(id: $id) {
      id
      name
      price {
        human
        number
      }
      sku
      description
      category_name
      image {
        thumb
        small
      }
      created_at {
        human
      }
    }
  }
`
