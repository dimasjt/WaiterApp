# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  file       :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_images_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#

class Image < ApplicationRecord
  mount_uploader :file, ImageUploader

  belongs_to :user

  validates :file, presence: true
end
