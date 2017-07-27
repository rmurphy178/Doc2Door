import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import AppointmentForm from './appointment_form';
import { fetchDoctors } from '../../actions/doctor_actions';


const mapStateToProps = ({ session, specialties }) => ({
  currentUser: session.currentUser,
  specialties
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchDoctors: () => dispatch(fetchDoctors())
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentForm));
