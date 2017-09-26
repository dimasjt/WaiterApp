# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  name        :string
#  price       :decimal(, )      default(0.0)
#  shop_id     :integer
#  image       :string
#  category_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_products_on_category_id  (category_id)
#  index_products_on_shop_id      (shop_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (shop_id => shops.id)
#

class Product < ApplicationRecord
  belongs_to :shop
  belongs_to :category

  delegate :name, to: :category, prefix: true
end