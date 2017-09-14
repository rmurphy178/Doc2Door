
import { connect } from 'react-redux';
import DoctorItem from './doctor_item';
import { fetchDoctor, fetchDoctors } from '../../actions/doctor_actions';
import { values } from 'lodash';
import { createAppointment } from '../../actions/appointment_actions';




const mapStateToProps = ({ doctors, session, appointments, specialties }) => ({
  doctors: doctors,
  currentUser: session.currentUser,
  appointments: appointments,
  specialties: specialties
});

const mapDispatchToProps = dispatch => ({
  fetchDoctor: (doctorId) => dispatch(fetchDoctor(doctorId)),
  fetchDoctors: (filters) => dispatch(fetchDoctors(filters)),
  createAppointment: (data) => dispatch(createAppointment(data))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorItem);
