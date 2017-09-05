import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchDoctors } from '../../actions/doctor_actions';
import Appointments from './appointments';
import { fetchSpecialty, fetchSpecialties } from '../../actions/specialty_actions';


const mapStateToProps = ({session, specialties, doctors}) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchDoctors: (filters) => dispatch(fetchDoctors(filters)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Appointments);
