class Specialty < ActiveRecord::Base
  validates :name, :doctor_id, presence: true;

  has_many :doctors,
    primary_key: :id,
    foreign_key: :doctor_id,
    class_name: :Doctor
end
