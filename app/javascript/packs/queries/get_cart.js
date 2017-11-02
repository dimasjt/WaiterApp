import { gql } from "react-apollo"

export default gql`
  query cart($id: ID!) {
    cart(id: $id) {
      id
      total_price {
        human
        number
      }
      items {
        id
        quantity
        product {
          id
          name
          price {
            human
            number
          }
        }
      }
    }
  }
`
