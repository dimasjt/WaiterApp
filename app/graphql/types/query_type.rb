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

  field :carts do
    type types[Types::CartType]
    resolve -> (obj, args, ctx) {
      ctx[:current_shop].carts
    }
  end

  field :cart do
    type Types::CartType
    argument :id, !types.ID
    resolve -> (obj, args, ctx) {
      ctx[:current_shop].carts.find(args[:id])
    }
  end

  field :orders do
    type types[Types::OrderType]
    resolve -> (obj, args, ctx) {
      ctx[:current_shop].orders
    }
  end

  field :order do
    type Types::OrderType
    argument :id, !types.ID
    resolve -> (obj, args, ctx) {
      ctx[:current_shop].orders.find(args[:id])
    }
  end
end
