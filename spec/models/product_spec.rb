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
#  description :text
#  sku         :string
#  barcode     :string
#  deleted_at  :datetime
#  in_stock    :boolean          default(TRUE), not null
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

require "rails_helper"

RSpec.describe Product, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
