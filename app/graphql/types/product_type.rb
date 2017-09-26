Types::ProductType = GraphQL::ObjectType.define do
  name "Product"

  field :id, types.ID
  field :name, types.String
  field :price, Types::Format::PriceType
  field :category_name, types.String
end
