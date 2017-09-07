import { connect } from 'react-redux';
import DoctorIndex from './doctor_index';
import { values } from 'lodash';
import { fetchDoctor, fetchDoctors } from '../../actions/doctor_actions';
import { createAppointment, fetchAppointments, fetchAppointment } from '../../actions/appointment_actions';



const mapStateToProps = ({session, doctors, appointments}) => ({
  doctors: values(doctors),
  appointment: appointments
});

const mapDispatchToProps = dispatch => ({
  fetchDoctor: (doctorId) => dispatch(fetchDoctor(doctorId)),
  fetchDoctors: (filters) => dispatch(fetchDoctors(filters)),
  createAppointment: (data) => dispatch(createAppointment(data)),
  fetchAppointments: () => dispatch(fetchAppointments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(DoctorIndex);
