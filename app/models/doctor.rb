# == Schema Information
#
# Table name: doctors
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  image_url  :string           not null
#  rating     :integer          not null
#  specialty  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Doctor < ActiveRecord::Base
  validates :name, :image_url, :rating, :specialty, presence: true;

  has_many :users
  has_many :appointments
  belongs_to :specialty
  has_many :reviews
  
end
