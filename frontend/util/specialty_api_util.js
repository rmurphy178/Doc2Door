export const fetchSpecialties = data => (
  $.ajax({
    method: 'GET',
    url: '/api/specialties',
    data
  })
);

export const fetchSpecialty = id => (
  $.ajax({
  method: 'GET',
  url: `api/specialties/${id}`,
  id
  })
);
