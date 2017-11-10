# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  name       :string
#  shop_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_categories_on_shop_id  (shop_id)
#

FactoryBot.define do
  factory :category do
    name { Faker::Commerce.material }

    association :shop, factory: :shop
  end
end
