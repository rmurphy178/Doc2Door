@specialties.each do |specialty|
  json.set! specialty.name do
    json.partial! 'specialty', specialty: specialty
  end
end
