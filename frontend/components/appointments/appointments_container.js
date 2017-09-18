import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchDoctors } from '../../actions/doctor_actions';
import Appointments from './appointments';
import { fetchSpecialty, fetchSpecialties } from '../../actions/specialty_actions';
import { createAppointment } from '../../actions/appointment_actions';
import { createAppointmentRequest } from '../../actions/appointment_request_actions';


const mapStateToProps = ({session, specialties, doctors, appointments}) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchDoctors: (filters) => dispatch(fetchDoctors(filters)),
  createAppointment: (appointment) => dispatch(createAppointment(appointment)),
  createAppointmentRequest: (appointment_request) => dispatch(createAppointmentRequest(appointment_request)),
  fetchSpecialty: (specialty) => dispatch(fetchSpecialty(specialty)),
  fetchSpecialties: (filters) => dispatch(fetchSpecialties(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Appointments);
