# == Schema Information
#
# Table name: carts
#
#  id          :integer          not null, primary key
#  shop_id     :integer
#  order_id    :integer
#  total_price :decimal(, )      default(0.0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_carts_on_order_id  (order_id)
#  index_carts_on_shop_id   (shop_id)
#
# Foreign Keys
#
#  fk_rails_...  (order_id => orders.id)
#  fk_rails_...  (shop_id => shops.id)
#

class Cart < ApplicationRecord
  belongs_to :shop
  belongs_to :order, required: false
  has_many :items

  accepts_nested_attributes_for :items
end
