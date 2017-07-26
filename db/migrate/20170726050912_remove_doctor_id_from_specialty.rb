class RemoveDoctorIdFromSpecialty < ActiveRecord::Migration
  def up
    drop_table :specialties
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
