class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def to_api(version)
    attrs = self.class.send("api_#{version}")
    Hash[*attrs.map do |attr|
      [attr, send(attr)]
    end.flatten]
  end
end
