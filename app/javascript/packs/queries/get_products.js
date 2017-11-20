import { gql } from "react-apollo"

export default gql`
  query products($scope: String) {
    products(scope: $scope) {
      id
      name
      price {
        human
        number
      }
      image {
        thumb
        small
      }
      category_id
      sku
      description
    }
  }
`
