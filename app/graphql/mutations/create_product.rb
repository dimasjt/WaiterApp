class Mutations::CreateProduct < GraphQL::Function
  ProductInput = GraphQL::InputObjectType.define do
    name "CreateProduct"

    # TODO: category_id, price should be Int type

    argument :name, !types.String
    argument :price, !types.String
    argument :category_id, types.String
    argument :description, types.String
    argument :sku, types.String
  end

  argument :product, !ProductInput
  argument :image_id, types.ID
  type Types::ProductType

  def call(obj, args, ctx)
    product = ctx[:current_shop].products.new(args[:product].to_h)

    if image = ctx[:current_user].images.find_by(id: args[:image_id])
      product.image = image.file
    end
    product.save
    product
  end
end
