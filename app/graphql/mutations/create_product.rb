class Mutations::CreateProduct < GraphQL::Function
  ProductInput = GraphQL::InputObjectType.define do
    name "CreateProduct"

    # TODO: category_id, price should be Int type

    argument :name, !types.String
    argument :price, !types.String
    argument :category_id, !types.String
    argument :description, types.String
    argument :sku, types.String
  end

  argument :product, !ProductInput
  type Types::ProductType

  def call(obj, args, ctx)
    ctx[:current_shop].products.create(args[:product].to_h)
  end
end
