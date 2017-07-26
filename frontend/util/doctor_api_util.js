
export const fetchDoctors = data => (
  $.ajax({
    method: 'GET',
    url: '/api/doctors',
    data
  })
);


export const fetchDoctor = id => (
  $.ajax({
    method: 'GET',
    url: `/api/doctors/${id}`,
    id
  })
);
