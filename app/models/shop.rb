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

class Shop < ApplicationRecord
  belongs_to :user
  has_many :categories
  has_many :products
  has_many :users
  has_many :carts
  has_many :orders

  validates :name, :city, presence: true
end
