class CreateDoctors < ActiveRecord::Migration
  def change
    create_table :doctors do |t|
      t.string :name, null: false
      t.string :image_url, null: false
      t.integer :rating, null: false
      t.string :specialty, null: false


      t.timestamps null: false
    end
  end
end
