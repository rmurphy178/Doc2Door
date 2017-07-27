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
    name: 'Dr. Thomas',
    image_url: 'password123',
    rating: 90,
    specialty: 'pediatrics'

  )
  doctor2 = Doctor.create!(
    name: 'Dr. Warner',
    image_url: 'password123',
    rating: 90,
    specialty: 'allergy'
  )

  doctor3 = Doctor.create!(
    name: 'Dr. Jones',
    image_url: '123456',
    rating: 90,
    specialty: 'dermatology'
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

  specialty1 = Specialty.create!(
    name: 'pediatrics'
  )
  specialty2 = Specialty.create!(
    name: 'allergy'
  )
  specialty3 = Specialty.create!(
    name: 'general'
  )
  specialty4 = Specialty.create!(
    name: 'geriatrics'
  )
  specialty5 = Specialty.create!(
    name: 'endocrinology'
  )
  specialty6 = Specialty.create!(
    name: 'dermatology'
  )


end
