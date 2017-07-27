import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import AppointmentForm from './appointment_form';
import { fetchDoctors } from '../../actions/doctor_actions';
import { fetchSpecialties } from  '../../actions/specialty_actions';
import { fetchAppointments } from '../../actions/appointment_actions';

const mapStateToProps = ({session, specialties, doctors }) => ({
  session,
  specialties,
  doctors,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchDoctors: () => dispatch(fetchDoctors()),
  fetchAppointments: () => dispatch(fetchAppointments())
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentForm));
