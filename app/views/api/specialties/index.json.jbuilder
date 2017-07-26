@specialties.each do |specialty|
  json.set! specialty.id do
    json.partial! 'specialty', specialty: specialty
  end
end
