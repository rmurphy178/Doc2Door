import * as APIUtil from '../util/specialty_api_util';

export const RECEIVE_SPECIALTIES = "RECEIVE_SPECIALTIES";
export const RECEIVE_SPECIALTY = "RECEIVE_SPECIALTY";

export const receciveSpecialties = specialties => ({
  type: RECEIVE_SPECIALTIES,
  specialties
});

export const receciveSpecialty = specialty => ({
  type: RECEIVE_SPECIALTY,
  specialty
});


export const fetchSpecialties = name => dispatch => (
  APIUtil.fetchSpecialties(name).then(specialties => (
    dispatch(receciveSpecialties(specialties))
  ))
);

export const fetchSpecialty = name => dispatch => (
  APIUtil.fetchSpecialty(name).then(specialty => (
    dispatch(receciveSpecialty(specialty))
  ))
);
