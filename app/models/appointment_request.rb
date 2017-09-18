# == Schema Information
#
# Table name: appointment_requests
#
#  id         :integer          not null, primary key
#  date       :string           not null
#  user_id    :integer          not null
#  doctor_id  :integer          not null
#  address    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class AppointmentRequest < ActiveRecord::Base
  validates :user_id, :doctor_id, :address, :date, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :doctor,
    primary_key: :id,
    foreign_key: :doctor_id,
    class_name: :Doctor
end
