class Mutations::DeleteProduct < GraphQL::Function
  argument :id, !types.ID
  type Types::ProductType

  def call(obj, args, ctx)
    product = ctx[:current_shop].products.find(args[:id])
    product.delete!
    product
  end
end
