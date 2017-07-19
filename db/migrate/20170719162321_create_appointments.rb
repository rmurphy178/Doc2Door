class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.integer :user_id, null: false
      t.integer :doctor_id, null: false
      t.string :location, null: false
      t.string :time, null: false
      t.boolean :confirmed, null: false

      t.timestamps null: false
    end
    add_index :appointments, :user_id
    add_index :appointments, :doctor_id
  end
end
