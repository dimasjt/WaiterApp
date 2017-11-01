Types::OrderType = GraphQL::ObjectType.define do
  name "Order"

  field :id, types.ID
  field :customer_name, types.String
  field :cart, Types::CartType
end