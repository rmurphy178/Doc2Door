import merge from 'lodash/merge';

import {
  RECEIVE_APPOINTMENT_REQUESTS,
  RECEIVE_APPOINTMENT_REQUEST,
  RECEIVE_APPOINTMENT_REQUEST_ERRORS
} from '../actions/appointment_request_actions';


const nullAppointmentRequest = Object.freeze({
  user_id: null,
  address: null,
  date: null,
  doctor_id: null,
  errors: []
});

const AppointmentRequestsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_APPOINTMENT_REQUESTS:
      const appointment_requests = action.appointment_requests;
      return merge({}, null, appointment_requests);
    case RECEIVE_APPOINTMENT_REQUEST:
      const appointment_request = action.appointment_request;
      return merge({}, nullAppointmentRequest, appointment_request);
    case RECEIVE_APPOINTMENT_REQUEST_ERRORS:
      const errors = action.errors;
      return merge({}, state, errors);
    default:
      return state;
    }
};






export default AppointmentRequestsReducer;
