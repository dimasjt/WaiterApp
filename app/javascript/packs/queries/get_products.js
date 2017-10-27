import { gql } from "react-apollo"

export default gql`
  query products {
    products {
      id
      name
      price {
        human
        number
      }
      sku
      description
    }
  }
`
