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
#  status      :integer
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
  STATUSES = %w[queue served paid cancelled]

  belongs_to :shop
  has_one :order
  has_many :items

  accepts_nested_attributes_for :items

  enum status: STATUSES

  before_save :count_total_price

  def count_total_price
    self.total_price = items.inject(0) do |sum, item|
      sum + (item.product.price * item.quantity)
    end
  end
end
