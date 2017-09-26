Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :products do
    type types[Types::ProductType]
    resolve ->(obj, args, ctx) {
      ctx[:current_shop].products
    }
  end
end
