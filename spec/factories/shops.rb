# == Schema Information
#
# Table name: shops
#
#  id           :integer          not null, primary key
#  name         :string
#  user_id      :integer
#  subscription :integer          default(0)
#  city         :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_shops_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#

FactoryGirl.define do
  factory :shop do
    name "MyString"
    city "MyString"
  end
end
