class Api::BaseController < ApplicationController
  before_action :authenticate_by_token!
  skip_before_action :verify_authenticity_token

  def json_errors(obj)
    {
      messages: obj.errors.full_messages
    }
  end

  def authenticate_by_token!
    if Rails.env.development?
      user = User.find_by email: "rick@mailinator.com"
      sign_in user
    else
      token = request.headers["Authorization"].try(:sub, /Bearer /, "")

      if token && user = User.authenticate(token)
        sign_in user, store: false
      end
    end
  end
end
