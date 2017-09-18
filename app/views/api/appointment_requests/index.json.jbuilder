@appointment_requests.each do |appointment_request|
  json.set! appointment_request.id do
    json.partial! 'appointment_request', appointment_request: appointment_request
  end
end
