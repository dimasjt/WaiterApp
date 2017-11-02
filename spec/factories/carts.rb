# == Schema Information
#
# Table name: carts
#
#  id           :integer          not null, primary key
#  shop_id      :integer
#  order_id     :integer
#  total_price  :decimal(, )      default(0.0)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  status       :integer
#  table_number :string
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

FactoryGirl.define do
  factory :cart do
    order nil
    items ""
    total_price "MyString"
  end
end
