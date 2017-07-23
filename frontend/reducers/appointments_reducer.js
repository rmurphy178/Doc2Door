import merge from 'lodash/merge';

import {
  RECEIVE_APPOINTMENTS
} from '../actions/appointment_actions';



const AppointmentsReducer = (state ={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_APPOINTMENTS:
      const appointments = action.appointments;
      return action.appointments;
    default:
      return state;
    }
};







export default AppointmentsReducer;
