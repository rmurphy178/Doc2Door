import merge from 'lodash/merge';

import {
  RECEIVE_DOCTORS, RECEIVE_DOCTOR
} from '../actions/doctor_actions';

const nullDoctor = Object.freeze({
  id: null,
  name: null,
  image_url: null,
  rating: null,
  specialty: null,
  appointments: [],
  reviews: []
});

const DoctorsReducer = (state = nullDoctor, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DOCTORS:
      const doctors = action.doctors;
      return merge({}, null, doctors);
    case RECEIVE_DOCTOR:
      const doctor = action.doctor;
    return merge({}, null, doctor);
    default:
      return state;
    }
};







export default DoctorsReducer;
