import { gql } from "react-apollo"

export default gql`
  query categories {
    categories {
      id
      name
    }
  }
`
