# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  file       :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_images_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#

require 'rails_helper'

RSpec.describe Image, type: :model do
  describe "validation" do
    let!(:user) { create(:user) }
    let(:image_params) { attributes_for(:image, user_id: user.id) }

    it "should create image" do
      image = Image.new(image_params)
      expect(image.save).to be(true)
    end
  end
end
