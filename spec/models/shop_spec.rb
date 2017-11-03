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

require 'rails_helper'

RSpec.describe Shop, type: :model do
  let!(:user) { create(:user) }
  let(:shop_params) { attributes_for(:shop) }

  describe "validations" do
    it "should create shop" do
      shop = Shop.new(shop_params.merge(user_id: user.id))
      expect(shop.save).to be(true)
      expect(shop.user).to eq(user)
    end
  end
end
