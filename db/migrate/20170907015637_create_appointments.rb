class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.integer :user_id, null: false
      t.integer :doctor_id, null: false
      t.string :address, null: false
      t.string :date, null: false
      t.timestamps null: false
    end
    add_index :appointments, :user_id
    add_index :appointments, :doctor_id
  end
end
