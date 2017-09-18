import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import AppointmentsReducer from './appointments_reducer';
import DoctorsReducer from './doctors_reducer';
import SpecialtiesReducer from './specialties_reducer';
import AppointmentRequestsReducer from './appointment_requests_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  appointments: AppointmentsReducer,
  doctors: DoctorsReducer,
  specialties: SpecialtiesReducer,
  appointment_requests: AppointmentRequestsReducer
});

export default rootReducer;
