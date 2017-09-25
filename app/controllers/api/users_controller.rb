class Api::UsersController < Api::BaseController
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user.to_api(:token), status: 201
    else
      render json: json_errors(@user), status: 402
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password, :phone)
  end
end
