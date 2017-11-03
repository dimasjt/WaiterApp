module ControllerHelpers
  extend ActiveSupport::Concern

  def authorize(user)
    request.headers["Authorization"] = "Bearer #{user.token}"
  end

  def fixture_image(index = 1)
    fixture_file_upload("images/example#{index}.jpg", "image/jpg")
  end

  %w[get post patch put delete].each do |m|
    define_method("auth_#{m}") do |user, action, **opts|
      authorize(user)
      send(m, action, opts)
    end
  end
end