export const fetchAppointmentRequests = data => (
  $.ajax({
    method: 'GET',
    url: '/api/appointment_requests',
    data
  })
);


export const fetchAppointmentRequest = id => (
  $.ajax({
    method: 'GET',
    url: `/api/appointment_requests/${id}`,
    id
  })
);


export const createAppointmentRequest = (appointment_request) => (
  $.ajax({
  method: 'POST',
  url: `api/appointment_requests`,
  data: appointment_request
  })
);
