class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :price
      t.belongs_to :shop, foreign_key: true
      t.string :image
      t.belongs_to :category, foreign_key: true

      t.timestamps
    end
  end
end
