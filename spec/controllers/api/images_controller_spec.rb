require 'rails_helper'

RSpec.describe Api::ImagesController, type: :controller do
  let!(:user) { create(:user, :with_shop) }

  describe "POST #create" do
    before(:each) { sign_in(user) }

    it "create image" do
      expect {
        post :create, params: { image: { file: fixture_image } }
      }.to change(Image, :count).from(0).to(1)
    end

    it "not create image and return errors" do
      post :create, params: { image: { file: "" } }
      expect(response.status).to be(402)
    end
  end

end
