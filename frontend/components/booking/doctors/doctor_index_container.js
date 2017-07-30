import { connect } from 'react-redux';
import DoctorIndex from './doctor_index';
import { values } from 'lodash';
import { fetchDoctor, fetchDoctors } from '../../actions/doctor_actions';

const doctors = {doctors};
const mapStateToProps = (state, ownProps) => ({
  doctors: values(state.doctors),
});

const mapDispatchToProps = dispatch => ({
  fetchDoctor: (doctorId) => dispatch(fetchDoctor(doctorId)),
  fetchDoctors: (filters) => dispatch(fetchDoctors(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(DoctorIndex);
