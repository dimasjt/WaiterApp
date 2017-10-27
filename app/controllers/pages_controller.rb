class PagesController < ApplicationController
  def home
  end

  def app
    render :app, layout: "app/base"
  end
end
