import { gql } from "react-apollo"

export default gql`
  mutation createOrder($order: OrderInput!) {
    createOrder(order: $order) {
      id
      customer_name
      total_pay {
        human
        number
      }
      return_cash {
        human
        number
      }
    }
  }
`
