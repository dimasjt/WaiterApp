class Functions::Login < GraphQL::Function
  argument :user, !Types::AuthType
  type Types::TokenType

  def call(obj, args, ctx)
    user = User.find_for_database_authentication(email: args[:user][:email])

    if user && user.valid_password?(args[:user][:password])
      user
    end
  end
end
