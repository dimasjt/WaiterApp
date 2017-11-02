class Mutations::CreateCart < GraphQL::Function
  ItemInput = GraphQL::InputObjectType.define do
    name "ItemCart"

    argument :product_id, !types.String
    argument :quantity, !types.Int
  end

  CartInput = GraphQL::InputObjectType.define do
    name "CreateCart"

    argument :items, types[ItemInput]
    argument :table_number, types.String
  end

  argument :cart, !CartInput
  type Types::CartType

  def call(obj, args, ctx)
    params = args[:cart].to_h.tap do |p|
      p["items_attributes"] = p.delete("items")
    end

    cart = ctx[:current_shop].carts.create(params)
    cart
  end
end
