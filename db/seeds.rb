# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# User.create({first_name: 'Ryan', last_name: 'Murphy', email: 'ryan@aol.com', password: 'password123', zip: 94105})


User.destroy_all

ActiveRecord::Base.transaction do

  user1 = User.create!(
    first_name: 'Ryan',
    last_name: 'Murphy',
    email: 'ryan@aol.com',
    password: 'password123',
    zip: 94105
  )
  user2 = User.create!(
    first_name: 'Dillon',
    last_name: 'Murphy',
    email: 'dillon@aol.com',
    password: 'password123',
    zip: 94105
  )

  user3 = User.create!(
    first_name: 'Guest1',
    last_name: 'Guest',
    email: 'guest@doc2door.com',
    password: '123456',
    zip: 94105
  )

  user4 = User.create!(
    first_name: 'Guest',
    last_name: 'Demo',
    email: 'elmo.jones@aol.com',
    password: 'password',
    zip: 94105
  )


  doctor1 = Doctor.create!(
    name: 'Dr. O',
    image_url: '-',
    rating: 90,
    specialty: 'pediatrics'

  )
  doctor2 = Doctor.create!(
    name: 'Dr. Lurch',
    image_url: '-',
    rating: 90,
    specialty: 'allergy'
  )

  doctor3 = Doctor.create!(
    name: 'Dr. Peck',
    image_url: '-',
    rating: 90,
    specialty: 'dermatology'
  )
  doctor4 = Doctor.create!(
    name: 'Dr. Brown',
    image_url: '-',
    rating: 90,
    specialty: 'general'

  )
  doctor5 = Doctor.create!(
    name: 'Dr. Troy',
    image_url: '-',
    rating: 90,
    specialty: 'geriatrics'
  )

  doctor6 = Doctor.create!(
    name: 'Dr. Johnson',
    image_url: '-',
    rating: 90,
    specialty: 'endocrinology'
  )
  doctor7 = Doctor.create!(
    name: 'Dr. F',
    image_url: '-',
    rating: 90,
    specialty: 'pediatrics'

  )
  doctor8 = Doctor.create!(
    name: 'Dr. X',
    image_url: '-',
    rating: 90,
    specialty: 'allergy'
  )

  doctor9 = Doctor.create!(
    name: 'Dr. Z',
    image_url: '-',
    rating: 90,
    specialty: 'dermatology'
  )
  doctor10 = Doctor.create!(
    name: 'Dr. L',
    image_url: '-',
    rating: 90,
    specialty: 'geriatrics'

  )
  doctor11 = Doctor.create!(
    name: 'Dr. Q',
    image_url: '-',
    rating: 90,
    specialty: 'allergy'
  )

  doctor12 = Doctor.create!(
    name: 'Dr. P',
    image_url: '-',
    rating: 90,
    specialty: 'general'
  )

  appointment1 = Appointment.create!(
    user_id: 2,
    doctor_id: 1,
    location: '160 Spear street',
    time: 'morning',
    confirmed: true
  )

  appointment2 = Appointment.create!(
    user_id: 1,
    doctor_id: 3,
    location: '160 Spear street',
    time: 'afternoon',
    confirmed: true
  )

    appointment3 = Appointment.create!(
    user_id: 3,
    doctor_id: 1,
    location: '160 Spear street',
    time: 'evening',
    confirmed: true
  )

  appointment4 = Appointment.create!(
    user_id: 2,
    doctor_id: 2,
    location: '160 Spear street',
    time: 'afternoon',
    confirmed: true
  )
end
