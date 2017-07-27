import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  email: null,
  appointments: [],
  reviews: [],
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {
        currentUser
      });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {
        errors
      });
      case CLEAR_ERRORS:
      newState = merge({}, state);
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
