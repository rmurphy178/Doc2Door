class Appointment < ActiveRecord::Base

  validates :user_id, :doctor_id, :location, :time, :confirmed, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :doctor,
  primary_key: :id,
  foreign_key: :doctor_id,
  class_name: :Doctor

  has_one :review,
  through: :user,
  source: :review

end
