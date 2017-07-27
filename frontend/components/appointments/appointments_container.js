import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchDoctors } from '../../actions/doctor_actions';
import Appointments from './appointments';
import { getFilteredDoctors } from '../../reducers/selectors';
import { fetchSpecialty, fetchSpecialties } from '../../actions/specialty_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchDoctors: () => dispatch(fetchDoctors()),
  fetchSpecialties: () => dispatch(fetchSpecialties())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Appointments);
