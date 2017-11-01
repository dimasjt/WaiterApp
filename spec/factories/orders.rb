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

FactoryGirl.define do
  factory :order do
    number "MyString"
    total "9.99"
    sub_total "9.99"
    discount "9.99"
    payment_method 1
    shop nil
  end
end
