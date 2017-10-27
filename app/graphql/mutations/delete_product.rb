class Mutations::DeleteProduct < GraphQL::Function
  argument :id, !types.ID
  type Types::ProductType

  def call(obj, args, ctx)
    # ctx[:current_shop].products.find(args[:id]).destroy
    product = Product.find(args[:id])
    product.destroy
    product
  end
end
