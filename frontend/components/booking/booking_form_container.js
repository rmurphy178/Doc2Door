import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingForm from './booking_form';
import { fetchDoctors, fetchDoctor } from '../../actions/doctor_actions';
import { fetchAppointments, createAppointment } from '../../actions/appointment_actions';
import { fetchSpecialties } from '../../actions/specialty_actions';


const mapStateToProps = ({session, appointments, doctors, specialties, appointment_requests}) => ({
  currentUser: session.currentUser,
  appointments: appointments,
  doctors: doctors,
  specialties: specialties,
  appointment_requests: appointment_requests
});

const mapDispatchToProps = dispatch => ({
  fetchDoctor: (id) => dispatch(fetchDoctor(id)),
  createAppointment: (data) => dispatch(createAppointment(data)),
  fetchSpecialties: (data) => dispatch(fetchSpecialties(data))
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm));
