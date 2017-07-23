export const fetchAppointments = data => (
  $.ajax({
    method: 'GET',
    url: '/api/appointments',
    data
  })
);


export const fetchAppointment = id => (
  $.ajax({
    method: 'GET',
    url: `/api/appointments/${id}`,
    id
  })
);


export const createAppointment = data => (
  $.ajax({
  method: 'POST',
  url: 'api/appointments',
  data
  })
);
