class AddMoreDetailToProducts < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :description, :text
    add_column :products, :sku, :string
    add_column :products, :barcode, :string
  end
end
