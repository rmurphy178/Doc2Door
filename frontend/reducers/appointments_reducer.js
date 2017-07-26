import merge from 'lodash/merge';

import {
  RECEIVE_APPOINTMENTS, RECEIVE_APPOINTMENT
} from '../actions/appointment_actions';



const AppointmentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_APPOINTMENTS:
      const appointments = action.appointments;
      return action.appointments;
    case RECEIVE_APPOINTMENT:
    return action.appointment;
    default:
      return state;
    }
};







export default AppointmentsReducer;
