import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import AppointmentsReducer from './appointments_reducer';
import SpecialtiesReducer from './specialties_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  appointments: AppointmentsReducer,
  specialties: SpecialtiesReducer
});

export default rootReducer;
