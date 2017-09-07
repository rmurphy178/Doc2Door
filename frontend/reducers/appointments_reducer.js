import merge from 'lodash/merge';

import {
  RECEIVE_APPOINTMENTS,
  RECEIVE_APPOINTMENT,
  RECEIVE_APPOINTMENT_ERRORS
} from '../actions/appointment_actions';


const nullAppointment = Object.freeze({
  user_id: null,
  address: null,
  date: null,
  doctor_id: null,
  errors: []
});

const AppointmentsReducer = (state = nullAppointment, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_APPOINTMENTS:
      const appointments = action.appointments;
      return merge({}, null, appointments);
    case RECEIVE_APPOINTMENT:
      const appointment = action.appointment;
      return merge({}, nullAppointment, appointment);
    case RECEIVE_APPOINTMENT_ERRORS:
      const errors = action.errors;
      return merge({}, state, errors);
    default:
      return state;
    }
};






export default AppointmentsReducer;
