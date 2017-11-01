class AddDetailToOrders < ActiveRecord::Migration[5.1]
  def change
    add_column :orders, :total_pay, :decimal, default: 0.0
    add_column :orders, :return_cash, :decimal, default: 0.0
  end
end
