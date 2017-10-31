import { gql } from "react-apollo"

export default gql`
  query carts {
    carts {
      id
      total_price {
        human
        number
      }
    }
  }
`
