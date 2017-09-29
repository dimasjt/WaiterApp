class Functions::CreateProduct < GraphQL::Function
  ProductInput = GraphQL::InputObjectType.define do
    name "Product"

    argument :name, !types.String
    argument :price, !types.Int
    argument :category_id, !types.Int
  end

  argument :product, !ProductInput
  type Types::ProductType

  def call(obj, args, ctx)
    ctx[:current_shop].products.create(args[:product].to_h)
  end
end
