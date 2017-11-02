import { gql } from "react-apollo"

export default gql`
  query carts($status: String!) {
    carts(status: $status) {
      id
      total_price {
        human
        number
      }
    }
  }
`
