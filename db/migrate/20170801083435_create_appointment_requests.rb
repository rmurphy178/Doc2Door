class CreateAppointmentRequests < ActiveRecord::Migration
  def change
    create_table :appointment_requests do |t|
      t.date :date, null: false
      t.integer :user_id, null: false
      t.integer :doctor_id, null: false
      t.string :address, null: false
      t.string :date, null: false

      t.timestamps null: false
    end
  end
end
