class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.string :customer_name
      t.string :number
      t.decimal :total
      t.decimal :sub_total
      t.decimal :discount
      t.integer :payment_method
      t.belongs_to :shop, foreign_key: true

      t.timestamps
    end
    add_index :orders, :number, unique: true
  end
end
