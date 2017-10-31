Types::ItemType = GraphQL::ObjectType.define do
  name "Item"

  field :id, types.ID
  field :product, Types::ProductType
  field :quantity, types.Int
end