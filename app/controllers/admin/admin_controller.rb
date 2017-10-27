class Admin::AdminController < ApplicationController
  before_action :authenticate_user!
  before_action :current_shop

  layout "admin/base"

  def current_shop
    @current_shop ||= current_user.shops.first
  end
end
