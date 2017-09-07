import { connect } from 'react-redux';
import DoctorIndex from './doctor_index';
import { values } from 'lodash';
import { fetchDoctor, fetchDoctors } from '../../actions/doctor_actions';
import { createAppointment } from '../../actions/appointment_actions';

const appointment = {appointment};
const mapStateToProps = ({session, doctors, appointments}) => ({
  doctors: values(doctors),
  appointment: appointment
});

const mapDispatchToProps = dispatch => ({
  fetchDoctor: (doctorId) => dispatch(fetchDoctor(doctorId)),
  fetchDoctors: (filters) => dispatch(fetchDoctors(filters)),
  createAppointment: (data) => dispatch(createAppointment(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(DoctorIndex);
