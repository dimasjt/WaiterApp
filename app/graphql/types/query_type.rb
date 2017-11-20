Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :products do
    type types[Types::ProductType]
    argument :scope, types.String, default_value: "available"
    resolve ->(obj, args, ctx) {
      unless ctx[:current_shop].present? || %w[available all deleted].include?(args[:scope])
        return []
      end

      ctx[:current_shop].products.send(args[:scope])
    }
  end

  field :product do
    type Types::ProductType
    argument :id, !types.ID
    resolve ->(obj, args, ctx) {
      ctx[:current_shop].products.find(args[:id])
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
      ctx[:current_shop].categories
    }
  end

  field :carts do
    type types[Types::CartType]
    argument :status, !types.String
    resolve -> (obj, args, ctx) {
      status = Cart::STATUSES.include?(args[:status]) ? args[:status] : "all"
      ctx[:current_shop].carts.send(status)
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
