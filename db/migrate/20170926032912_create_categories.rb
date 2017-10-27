class CreateCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.string :name
      t.belongs_to :shop

      t.timestamps
    end
  end
end
