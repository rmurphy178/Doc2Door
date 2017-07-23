import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import AppointmentReducer from './rootReducer';

const rootReducer = combineReducers({
  session: SessionReducer
});

export default rootReducer;
