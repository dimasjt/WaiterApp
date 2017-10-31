import { gql } from "react-apollo"

export default gql`
  mutation createCart($cart: CreateCart!) {
    createCart(cart: $cart) {
      id
    }
  }
`
