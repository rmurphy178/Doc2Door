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
    image_url: 'http://res.cloudinary.com/dq5wzf090/image/upload/v1504738282/dr-1_fl0ax3.png',
    rating: 90,
    specialty: 'pediatrics',
    bio: 'Doctor bio goes here'

  )
  doctor2 = Doctor.create!(
    name: 'Dr. Lurch',
    image_url: 'http://res.cloudinary.com/dq5wzf090/image/upload/v1504738288/dr-2_akc3c3.png',
    rating: 90,
    specialty: 'allergy',
    bio: 'Doctor bio goes here'
  )

  doctor3 = Doctor.create!(
    name: 'Dr. Peck',
    image_url: 'http://res.cloudinary.com/dq5wzf090/image/upload/v1504738288/dr-3_tcgcws.png',
    rating: 90,
    specialty: 'dermatology',
    bio: 'Doctor bio goes here'
  )
  doctor4 = Doctor.create!(
    name: 'Dr. Brown',
    image_url: 'http://res.cloudinary.com/dq5wzf090/image/upload/v1504738292/dr-4_cshecy.png',
    rating: 90,
    specialty: 'general',
    bio: 'Doctor bio goes here'

  )
  doctor5 = Doctor.create!(
    name: 'Dr. Troy',
    image_url: 'http://res.cloudinary.com/dq5wzf090/image/upload/v1504738295/dr-5_tnpdnf.png',
    rating: 90,
    specialty: 'geriatrics',
    bio: 'Doctor bio goes here'
  )

  doctor6 = Doctor.create!(
    name: 'Dr. Johnson',
    image_url: 'http://res.cloudinary.com/dq5wzf090/image/upload/v1504738298/dr-6_wnrz5f.png',
    rating: 90,
    specialty: 'endocrinology',
    bio: 'Doctor bio goes here'
  )
  doctor7 = Doctor.create!(
    name: 'Dr. F',
    image_url: 'http://res.cloudinary.com/dq5wzf090/image/upload/v1504738303/dr-7_bc4kko.png',
    rating: 90,
    specialty: 'pediatrics',
    bio: 'Doctor bio goes here'

  )
  doctor8 = Doctor.create!(
    name: 'Dr. X',
    image_url: 'http://res.cloudinary.com/dq5wzf090/image/upload/v1504738305/dr-8_ou6hrl.png',
    rating: 90,
    specialty: 'allergy',
    bio: 'Doctor bio goes here'
  )

  doctor9 = Doctor.create!(
    name: 'Dr. Z',
    image_url: 'http://res.cloudinary.com/dq5wzf090/image/upload/v1504738307/dr-9_rayrth.png',
    rating: 90,
    specialty: 'dermatology',
    bio: 'Doctor bio goes here'
  )
  doctor10 = Doctor.create!(
    name: 'Dr. L',
    image_url: 'http://res.cloudinary.com/dq5wzf090/image/upload/v1504738298/dr-6_wnrz5f.png',
    rating: 90,
    specialty: 'geriatrics',
    bio: 'Doctor bio goes here'

  )
  doctor11 = Doctor.create!(
    name: 'Dr. Q',
    image_url: 'http://res.cloudinary.com/dq5wzf090/image/upload/v1504738303/dr-7_bc4kko.png',
    rating: 90,
    specialty: 'allergy',
    bio: 'Doctor bio goes here'
  )

  doctor12 = Doctor.create!(
    name: 'Dr. P',
    image_url: 'http://res.cloudinary.com/dq5wzf090/image/upload/v1504738307/dr-9_rayrth.png',
    rating: 90,
    specialty: 'general',
    bio: 'Doctor bio goes here'
  )


end
