class Specialty < ActiveRecord::Base
  validates :name, presence: true;

  has_many :doctors,
    primary_key: :id,
    foreign_key: :doctor_id,
    class_name: :Doctor
end
