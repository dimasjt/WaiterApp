Types::ProductType = GraphQL::ObjectType.define do
  name "Product"

  field :id, types.ID
  field :name, types.String
  field :price, Types::Format::PriceType
  field :sku, types.String
  field :description, types.String
  field :category_name, types.String
end
