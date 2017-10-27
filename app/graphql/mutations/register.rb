class Mutations::Register < GraphQL::Function
  RegisterInput = GraphQL::InputObjectType.define do
    name "Register"

    argument :email, !types.String
    argument :password, !types.String
    argument :first_name, !types.String
    argument :last_name, !types.String
    argument :phone, !types.String
  end

  argument :user, !RegisterInput
  type Types::TokenType

  def call(obj, args, ctx)
    User.create!(args[:user].to_h)
  end
end
