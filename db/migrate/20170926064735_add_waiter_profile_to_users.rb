class AddWaiterProfileToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :pin, :string, limit: 4
    add_column :users, :shop_id, :integer
    change_column :users, :email, :string, null: true

    add_index :users, :shop_id
  end
end
