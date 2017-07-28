# == Schema Information
#
# Table name: appointments
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  doctor_id  :integer          not null
#  location   :string           not null
#  time       :string           not null
#  confirmed  :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Appointment < ActiveRecord::Base

  validates :user_id, :doctor_id, :location, :time, :day, presence: true

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
