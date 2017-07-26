import merge from 'lodash/merge';

import {
  RECEIVE_DOCTORS, RECEIVE_DOCTOR
} from '../actions/doctor_actions';



const DoctorsReducer = (state = {}, action) => {
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
