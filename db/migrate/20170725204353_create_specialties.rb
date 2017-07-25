class CreateSpecialties < ActiveRecord::Migration
  def change
    create_table :specialties do |t|
      t.string :name, null: false
      t.integer :doctor_id, null: false

      t.timestamps null: false
    end
    add_index :specialties, :doctor_id
  end
end
