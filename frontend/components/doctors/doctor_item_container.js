import { connect } from 'react-redux';
import DoctorItem from './doctor_item';
import { fetchDoctor, fetchDoctors } from '../../actions/doctor_actions';
import { values } from 'lodash';
import DoctorIndex from './doctor_index';

const convertDoctors= ({doctor}) => values(doctor);

const mapStateToProps = (state, ownProps) => ({
  doctorId: ownProps.doctorId,
  updateDoctor: ownProps.updateDoctor
});

const mapDispatchToProps = dispatch => ({
  fetchDoctor: (doctorId) => dispatch(fetchDoctor(doctorId)),
  fetchDoctors: (filters) => dispatch(fetchDoctors(filters))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorItem);
