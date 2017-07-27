import * as APIUtil from '../util/doctor_api_util';


export const RECEIVE_DOCTORS = "RECEIVE_DOCTORS";
export const RECEIVE_DOCTOR = "RECEIVE_DOCTOR";
export const RECEIVE_SPECIALISTS = "RECEIVE_SPECIALISTS";

export const receiveDoctors = (doctors) => ({
  type: RECEIVE_DOCTORS,
  doctors
});


export const receiveDoctor = (doctor) => ({
  type: RECEIVE_DOCTOR,
  doctor
});

export const receiveSpecialists = (specialty) => ({
  type: RECEIVE_SPECIALISTS,
  specialty
});

export const fetchDoctors = filters => dispatch => (
  APIUtil.fetchDoctors(filters).then(doctors => (
    dispatch(receiveDoctors(doctors))
  ))
);


export const fetchDoctor = id => dispatch => (
  APIUtil.fetchDoctor(id).then(doctor => (
    dispatch(receiveDoctor(doctor))
  ))
);
