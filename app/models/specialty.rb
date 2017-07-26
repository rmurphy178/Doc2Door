# == Schema Information
#
# Table name: specialties
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Specialty < ActiveRecord::Base
  validates :name, presence: true;

  has_many :doctors,
    primary_key: :id,
    foreign_key: :doctor_id,
    class_name: :Doctor
end
