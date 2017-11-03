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

FactoryBot.define do
  factory :image do
    association :user, factory: :user
    file { File.open(Rails.root.join("spec/fixtures/images/example1.jpg")) }
  end
end
