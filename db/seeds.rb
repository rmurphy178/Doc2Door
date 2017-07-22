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
    first_name: 'Guest',
    last_name: 'Guest',
    email: 'Guest',
    password: '123456',
    zip: 94105
  )
end
