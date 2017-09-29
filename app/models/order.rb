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
#
# Indexes
#
#  index_orders_on_number   (number) UNIQUE
#  index_orders_on_shop_id  (shop_id)
#
# Foreign Keys
#
#  fk_rails_...  (shop_id => shops.id)
#

class Order < ApplicationRecord
  belongs_to :shop
end
