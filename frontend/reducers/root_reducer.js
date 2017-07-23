import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import AppointmentsReducer from './appointments_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  appointments: AppointmentsReducer
});

export default rootReducer;
