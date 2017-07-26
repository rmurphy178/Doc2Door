import * as APIUtil from '../util/specialty_api_util';

export const RECEIVE_SPECIALTIES = "RECEIVE_APPOINTMENTS";
export const RECEIVE_SPECIALTY = "RECEIVE_APPOINTMENT";

export const receciveSpecialties = specialties => ({
  type: RECEIVE_SPECIALTIES,
  specialties
});

export const receciveSpecialty = specialty => ({
  type: RECEIVE_SPECIALTY,
  specialty
});


export const fetchSpecialties = filters => dispatch => (
  APIUtil.fetchSpecialties(filters).then(specialties => (
    dispatch(receciveSpecialties(specialties))
  ))
);

export const fetchSpecialty = id => dispatch => (
  APIUtil.fetchSpecialty(id).then(specialty => (
    dispatch(receciveSpecialty(specialty))
  ))
);
