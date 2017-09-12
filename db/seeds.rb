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
    name: 'Dr. W. Dement',
    image_url: 'https://res.cloudinary.com/dq5wzf090/image/upload/v1504738282/dr-1_fl0ax3.png',
    rating: 94,
    specialty: 'pediatrics',
    bio: "Earned his MD from the University of California, San Francisco School of Medicine and completed his residency at UCSF Fresno’s family medicine program. He completed a fellowship in pediatric medicine at the University of California before earning his master’s degree in public health from UCLA. He subsequently completed another fellowship in endocrinology from the NIH’s National Institute of Diabetes and Digestive and Kidney Diseases. He has been practicing medicine for over 30 years and has held a number of leadership positions including a role as chief physician of Community Health Foundation and medical director of HealthMed Intent Solutions."

  )
  doctor2 = Doctor.create!(
    name: 'Dr. Lurch',
    image_url: 'https://res.cloudinary.com/dq5wzf090/image/upload/v1504738288/dr-2_akc3c3.png',
    rating: 91,
    specialty: 'allergy',
    bio: "Originally from Baltimore, Dr. Lurch completed his undergraduate degree in computer science at Harvard College in Boston before attending New York University of Health Sciences for medical school. He completed his family medicine residency at Mount Spritzer Hospital in New York City where he served as chief resident. He returned to Southern California to continue practicing family medicine and received specialty training in primary care medicine. Dr. Lurch is passionate about the intersection of technology and healthcare and has even published a paper on current technology trends in wearable medical devices in the Journal of the Boston State Academy of Family Physicians. He is fluent in Mandarin."
  )

  doctor3 = Doctor.create!(
    name: 'Dr. Peck',
    image_url: 'https://res.cloudinary.com/dq5wzf090/image/upload/v1504738288/dr-3_tcgcws.png',
    rating: 92,
    specialty: 'dermatology',
    bio: "Graduated with honors from UCLA with a bachelor’s degree in microbiology, immunology, and molecular genetics, followed by medical school at Sydney Kimmel Medical College at Thomas Jefferson University in Philadelphia. She then returned to Southern California for her pediatric residency at Mattel Children’s Hospital at UCLA. She has conducted research on pediatric obesity prevention, streamlining asthma care for pediatric patients, and quality improvement for treating eye injuries in trauma centers."
  )
  doctor4 = Doctor.create!(
    name: 'Dr. Brown',
    image_url: 'https://res.cloudinary.com/dq5wzf090/image/upload/v1504738292/dr-4_cshecy.png',
    rating: 93,
    specialty: 'general',
    bio: "Raised in rural Arizona, he attended medical school at the University of Arizona where he also received his Master’s in Public Health with a focus in Public Health Policy and Management. He completed his emergency medicine residency training right here in the Bay Area at the UCSF-SFGH program in San Francisco. He also served on the prestigious American Medical Association's Board of Trustees during formation of the Affordable Care Act. He also continues to practice emergency medicine in one of the Bay Area's busy emergency departments. Offering coverage for Burlingame, CA and the SF Peninsula, including Silicon Valley."

  )
  doctor5 = Doctor.create!(
    name: 'Dr. Troy',
    image_url: 'https://res.cloudinary.com/dq5wzf090/image/upload/v1504738295/dr-5_tnpdnf.png',
    rating: 92,
    specialty: 'geriatrics',
    bio: "Originally from Baltimore, Dr. Troy completed his undergraduate degree in computer science at Harvard College in Boston before attending New York University of Health Sciences for medical school. He completed his family medicine residency at Mount Spritzer Hospital in New York City where he served as chief resident. He returned to Southern California to continue practicing family medicine and received specialty training in primary care medicine. Dr. Troy is passionate about the intersection of technology and healthcare and has even published a paper on current technology trends in wearable medical devices in the Journal of the Boston State Academy of Family Physicians. He is fluent in Mandarin."
  )

  doctor6 = Doctor.create!(
    name: 'Dr. Johnson',
    image_url: 'https://res.cloudinary.com/dq5wzf090/image/upload/v1504738298/dr-6_wnrz5f.png',
    rating: 97,
    specialty: 'endocrinology',
    bio: "Raised in rural Arizona, she attended medical school at the University of Arizona where she also received her Master’s in Public Health with a focus in Public Health Policy and Management. She completed her emergency medicine residency training right here in the Bay Area at the UCSF-SFGH program in San Francisco. She also served on the prestigious American Medical Association's Board of Trustees during formation of the Affordable Care Act. She also continues to practice emergency medicine in one of the Bay Area's busy emergency departments. Offering coverage for Burlingame, CA and the SF Peninsula, including Silicon Valley."
  )
  doctor7 = Doctor.create!(
    name: 'Dr. Fink',
    image_url: 'https://res.cloudinary.com/dq5wzf090/image/upload/v1504738303/dr-7_bc4kko.png',
    rating: 92,
    specialty: 'pediatrics',
    bio: "Graduated with honors from UCLA with a bachelor’s degree in microbiology, immunology, and molecular genetics, followed by medical school at Sydney Crosby Medical College at Ben Franklin University in Philadelphia. He then returned to Southern California for her pediatric residency at Mattel Children’s Hospital at UCLA. He has conducted research on pediatric obesity prevention, streamlining asthma care for pediatric patients, and quality improvement for treating eye injuries in trauma centers."

  )
  doctor8 = Doctor.create!(
    name: 'Dr. Xavier',
    image_url: 'https://res.cloudinary.com/dq5wzf090/image/upload/v1504738305/dr-8_ou6hrl.png',
    rating: 90,
    specialty: 'allergy',
    bio: "Graduated with honors from UCLA with a bachelor’s degree in microbiology, immunology, and molecular genetics, followed by medical school at Sidney Kimmel Medical College at Thomas Jefferson University in Philadelphia. She then returned to Southern California for her pediatric residency at Mattel Children’s Hospital at UCLA. She has conducted research on pediatric obesity prevention, streamlining asthma care for pediatric patients, and quality improvement for treating eye injuries in trauma centers."
  )

  doctor9 = Doctor.create!(
    name: 'Dr. Jameson',
    image_url: 'https://res.cloudinary.com/dq5wzf090/image/upload/v1504738307/dr-9_rayrth.png',
    rating: 89,
    specialty: 'dermatology',
    bio: "Raised in rural Arizona, she attended medical school at the University of Arizona where she also received her Master’s in Public Health with a focus in Public Health Policy and Management. She completed her emergency medicine residency training right here in the Bay Area at the UCSF-SFGH program in San Francisco. She also served on the prestigious American Medical Association's Board of Trustees during formation of the Affordable Care Act. She also continues to practice emergency medicine in one of the Bay Area's busy emergency departments. Offering coverage for Burlingame, CA and the SF Peninsula, including Silicon Valley."
  )
  doctor10 = Doctor.create!(
    name: 'Dr. Lane',
    image_url: 'https://res.cloudinary.com/dq5wzf090/image/upload/v1504738298/dr-6_wnrz5f.png',
    rating: 95,
    specialty: 'geriatrics',
    bio: 'Attended Yale University School of Nursing for RN and MSN degrees after obtaining BA from Evergreen State College, Olympia Washington. She has worked in various healthcare settings around San Francisco, including UCSF, SF General Hospital, Haight Ashbury Free Clinic, and has provided house calls on the streets with the San Francisco Homeless Outreach Team. She is fluent in Spanish, as well as basic French and Portuguese. She is currently offering house calls in San Francisco and the surrounding areas.'

  )
  doctor11 = Doctor.create!(
    name: 'Dr. Wagner',
    image_url: 'https://res.cloudinary.com/dq5wzf090/image/upload/v1504738303/dr-7_bc4kko.png',
    rating: 92,
    specialty: 'allergy',
    bio: "Raised in rural Idaho, he attended medical school at the University of Arizona where he also received his Master’s in Public Health with a focus in Public Health Policy and Management. He completed his emergency medicine residency training right here in the Bay Area at the UCSF-SFGH program in San Francisco. He also served on the prestigious American Medical Association's Board of Trustees during formation of the Affordable Care Act. He also continues to practice emergency medicine in one of the Bay Area's busy emergency departments. Offering coverage for Burlingame, CA and the SF Peninsula, including Silicon Valley."
  )

  doctor12 = Doctor.create!(
    name: 'Dr. Lyles',
    image_url: 'https://res.cloudinary.com/dq5wzf090/image/upload/v1504738307/dr-9_rayrth.png',
    rating: 98,
    specialty: 'general',
    bio: "Earned her MD from the University of California, San Francisco School of Medicine and completed her residency at UCSF Fresno’s family medicine program. She completed a fellowship in geriatric medicine at the University of Southern California before earning her master’s degree in public health from UCLA. She subsequently completed another fellowship in endocrinology from the NIH’s National Institute of Diabetes and Digestive and Kidney Diseases. She has been practicing medicine for over 30 years and has held a number of leadership positions including a role as chief physician of Community Health Foundation and medical director of Health Intent Solutions."
  )


end
