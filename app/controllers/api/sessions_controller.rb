class Api::SessionsController < ApplicationController
  def create
    @user = User.find_for_database_authentication(email: user_params[:email])

    if @user.valid_password?(user_params[:password])
      render json: @user.to_api(:token), status: 200
    else
      render json: { errors: ["Invalid email or password"] }, status: 401
    end
  end

  private

  def user_params
    params.permit(:email, :password)
  end
end
