
export const fetchDoctors = data => {
  const specialty = data ?  `doctor[specialty]=${data.specialty}` : ''
  return $.ajax({
    method: 'GET',
    url: `/api/doctors?${specialty}`,
    data
  })
};


export const fetchDoctor = id => (
  $.ajax({
    method: 'GET',
    url: `/api/doctors/${id}`,
    id
  })
);
