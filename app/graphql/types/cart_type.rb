Types::CartType = GraphQL::ObjectType.define do
  name "Cart"

  field :id, types.ID
  field :total_price, Types::Format::PriceType
  field :items, types[Types::ItemType]
end