import merge from 'lodash/merge';

import {
  RECEIVE_SPECIALTIES, RECEIVE_SPECIALTY
} from '../actions/appointment_actions';



const SpecialtiesReducer = (state ={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SPECIALTIES:
      const specialties = action.specialties;
      return merge({}, null, specialties);
    case RECEIVE_SPECIALTY:
      const specialty = action.specialty;
      return merge({}, null, action.specialty);
    default:
      return state;
    }
};







export default SpecialtiesReducer;
