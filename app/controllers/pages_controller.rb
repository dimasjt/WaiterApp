class PagesController < ApplicationController
  before_action :authenticate_user!, only: :app

  def home
  end

  def app
    render :app, layout: "app/base"
  end
end
