class Api::BaseController < ApplicationController
  def json_errors(obj)
    {
      messages: obj.errors.full_messages
    }
  end
end
