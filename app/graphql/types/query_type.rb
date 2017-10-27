Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :products do
    type types[Types::ProductType]
    resolve ->(obj, args, ctx) {
      return [] unless ctx[:current_shop].present?
      ctx[:current_shop].products
    }
  end

  field :users do
    type types[Types::UserType]
    resolve ->(obj, args, ctx) {
      ctx[:current_shop].users.waiter
    }
  end

  field :categories do
    type types[Types::CategoryType]
    resolve -> (obj, args, ctx) {
      Category.all
    }
  end
end
