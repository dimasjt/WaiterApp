class Mutations::CreateOrder < GraphQL::Function
  OrderInput = GraphQL::InputObjectType.define do
    name "OrderInput"

    argument :cart_id, !types.ID
    argument :total_pay, !types.String
    argument :customer_name, types.String
  end

  argument :order, !OrderInput
  type Types::OrderType

  def call(obj, args, ctx)
    order = ctx[:current_shop].orders.create(args[:order].to_h)
    order
  end
end