Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :login, function: Functions::Login.new
  field :register, function: Functions::Register.new

  field :create_product, function: Functions::CreateProduct.new
end
