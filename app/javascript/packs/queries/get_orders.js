import { gql } from "react-apollo"

export default gql`
  query orders {
    orders {
      id
      customer_name
      total {
        human
        number
      }
      created_at {
        human
      }
    }
  }
`
