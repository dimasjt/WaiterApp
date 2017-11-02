# == Schema Information
#
# Table name: orders
#
#  id             :integer          not null, primary key
#  customer_name  :string
#  number         :string
#  total          :decimal(, )
#  sub_total      :decimal(, )
#  discount       :decimal(, )
#  payment_method :integer
#  shop_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  cart_id        :integer
#  total_pay      :decimal(, )      default(0.0)
#  return_cash    :decimal(, )      default(0.0)
#
# Indexes
#
#  index_orders_on_cart_id  (cart_id)
#  index_orders_on_number   (number) UNIQUE
#  index_orders_on_shop_id  (shop_id)
#
# Foreign Keys
#
#  fk_rails_...  (shop_id => shops.id)
#

class Order < ApplicationRecord
  belongs_to :shop
  belongs_to :cart

  validates :total_pay,
    numericality: { greater_than_or_equal_to: Proc.new { |o| o.total_pay } },
    presence: true

  before_save :calculate

  private

  def calculate
    self.total = cart.total_price
    self.return_cash = total_pay - total

    cart.update_attribute(:status, :paid)
  end
end
