Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :login, function: Mutations::Login.new
  field :register, function: Mutations::Register.new

  field :createProduct, function: Mutations::CreateProduct.new
  field :deleteProduct, function: Mutations::DeleteProduct.new
end
