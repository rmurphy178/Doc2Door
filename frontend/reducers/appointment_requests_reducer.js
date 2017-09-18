import merge from 'lodash/merge';

import {
  RECEIVE_APPOINTMENT_REQUESTS,
  RECEIVE_APPOINTMENT_REQUEST,
  RECEIVE_APPOINTMENT_REQUEST_ERRORS
} from '../actions/appointment_actions';


const nullAppointmentRequest = Object.freeze({
  user_id: null,
  address: null,
  date: null,
  doctor_id: null,
  errors: []
});

const AppointmentRequestsReducer = (state = nullAppointmentRequest, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_APPOINTMENT_REQUESTS:
      const appointments = action.appointments;
      return merge({}, null, appointments);
    case RECEIVE_APPOINTMENT_REQUEST:
      const appointment = action.appointment;
      return merge({}, nullAppointmentRequest, appointment);
    case RECEIVE_APPOINTMENT_REQUEST_ERRORS:
      const errors = action.errors;
      return merge({}, state, errors);
    default:
      return state;
    }
};






export default AppointmentRequestsReducer;
