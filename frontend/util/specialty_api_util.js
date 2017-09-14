export const fetchSpecialties = name => {
  return $.ajax({
    method: 'GET',
    url: '/api/specialties',
    data: {
      specialty: {name: name.specialty}
    }
  });
};

export const fetchSpecialty = specialty => (
  $.ajax({
  method: 'GET',
  url: `api/specialties/specialty`,
  specialty
  })
);
