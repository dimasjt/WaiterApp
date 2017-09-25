class Api::UsersController < Api::BaseController
  def create
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password, :phone)
  end
end
