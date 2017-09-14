import merge from 'lodash/merge';

import { RECEIVE_SPECIALTY, RECEIVE_SPECIALTIES } from '../actions/specialty_actions';



const SpecialtiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SPECIALTIES:
      const specialties = action.specialties;
      return merge({}, null, specialties);
    case RECEIVE_SPECIALTY:
      const specialty = action.specialty;
      return merge({}, null, specialty);
    default:
      return state;
  }
};



export default SpecialtiesReducer;
