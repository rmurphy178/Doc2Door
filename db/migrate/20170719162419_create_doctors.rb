class CreateDoctors < ActiveRecord::Migration
  def change
    create_table :doctors do |t|
      t.string :name, null: false
      t.string :image_url, null: false
      t.integer :rating, null: false
      t.array :reviews
      t.array :appointments

      t.timestamps null: false
    end
  end
end
