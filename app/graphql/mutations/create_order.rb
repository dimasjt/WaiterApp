class Mutations::CreateOrder < GraphQL::Function
  argument :cart_id, types.ID
  type Types::OrderType

  def call(obj, args, ctx)
    order = ctx[:current_shop].orders.create(args[:cart_id])
    order
  end
end