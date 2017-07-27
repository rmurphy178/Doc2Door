import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchDoctors } from '../../actions/doctor_actions';
import Appointments from './appointments';
import { getFilteredDoctors } from '../../reducers/selectors';
import { fetchSpecialty } from '../../actions/specialty_actions';

const mapStateToProps = ({session, specialties}) => ({
  currentUser: session.currentUser,
  specialties
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchDoctors: () => dispatch(fetchDoctors()),
  fetchSpecialty: () => dispatch(fetchSpecialty())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Appointments);
