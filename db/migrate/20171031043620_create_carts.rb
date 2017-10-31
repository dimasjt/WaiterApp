class CreateCarts < ActiveRecord::Migration[5.1]
  def change
    create_table :carts do |t|
      t.belongs_to :shop, foreign_key: true
      t.belongs_to :order, foreign_key: true
      t.decimal :total_price, default: 0.0

      t.timestamps
    end
  end
end
