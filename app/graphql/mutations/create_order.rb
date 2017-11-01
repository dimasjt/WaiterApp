class Mutations::CreateOrder < GraphQL::Function
  OrderInput = GraphQL::InputObjectType.define do
    name "OrderInput"

    argument :cart_id, !types.ID,
    argument :pay_cash, !types.Int
    argument :customer_name, types.String
  end

  argument :order, !OrderInput
  type Types::OrderType

  def call(obj, args, ctx)
    order = ctx[:current_shop].orders.create(args[:cart_id])
    order
  end
end