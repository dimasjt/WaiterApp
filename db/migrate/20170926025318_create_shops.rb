class CreateShops < ActiveRecord::Migration[5.1]
  def change
    create_table :shops do |t|
      t.string :name
      t.belongs_to :user, foreign_key: true
      t.integer :subscription, default: 0
      t.string :city

      t.timestamps
    end
  end
end
