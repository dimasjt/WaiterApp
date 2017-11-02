Types::CartType = GraphQL::ObjectType.define do
  name "Cart"

  field :id, types.ID
  field :total_price, Types::Format::PriceType
  field :items, types[Types::ItemType]
  field :table_number, types.String
  field :created_at, Types::Format::DateTimeType
end