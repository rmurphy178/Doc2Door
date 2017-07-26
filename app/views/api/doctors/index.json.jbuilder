@doctors.each do |doctor|
  json.set! doctor.id do
    json.partial! 'doctor', doctor: doctor
  end
end
