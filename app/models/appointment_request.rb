class AppointmentRequest < ActiveRecord::Base
  validates :date, :user_id, :doctor_id, :address, :details, presence: true

  belongs_to :user
  belongs_to :doctor
end
