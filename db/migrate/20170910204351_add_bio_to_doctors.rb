class AddBioToDoctors < ActiveRecord::Migration
  def change
    add_column :doctors, :bio, :text
  end
end
