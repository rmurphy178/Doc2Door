
import { connect } from 'react-redux';
import DoctorItem from './doctor_item';
import { fetchDoctor, fetchDoctors } from '../../actions/doctor_actions';
import { values } from 'lodash';
import { createAppointment } from '../../actions/appointment_actions';
import { createAppointmentRequest } from '../../actions/appointment_request_actions';





const mapStateToProps = ({ doctors, session, appointments, specialties, appointment_requests }) => ({
  doctors: doctors,
  currentUser: session.currentUser,
  appointments: appointments,
  specialties: specialties,
  appointment_requests: appointment_requests
});

const mapDispatchToProps = dispatch => ({
  fetchDoctor: (doctorId) => dispatch(fetchDoctor(doctorId)),
  fetchDoctors: (filters) => dispatch(fetchDoctors(filters)),
  createAppointment: (data) => dispatch(createAppointment(data)),
  createAppointmentRequest: (data) => dispatch(createAppointmentRequest(data))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorItem);
