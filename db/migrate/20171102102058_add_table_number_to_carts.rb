class AddTableNumberToCarts < ActiveRecord::Migration[5.1]
  def change
    add_column :carts, :table_number, :string
  end
end
