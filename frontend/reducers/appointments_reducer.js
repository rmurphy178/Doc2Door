import merge from 'lodash/merge';

import {
  RECEIVE_APPOINTMENTS
} from '../reducers/appointments_appointment_actions';



const AppointmentReducer = (state ={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_APPOINTMENTS:
      const appointments = action.appointments;
      return action.appointments;
    default:
      return state;
    }
};







export default AppointmentReducer;
