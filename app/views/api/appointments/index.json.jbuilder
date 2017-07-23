@appointments.each do |appointment|
  json.set! appointment.id do
    json.partial! 'appointment', appointment: appointment
  end
end
