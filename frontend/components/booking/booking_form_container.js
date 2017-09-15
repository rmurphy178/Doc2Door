import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingForm from './booking_form';
import { fetchDoctors, fetchDoctor } from '../../actions/doctor_actions';
import { fetchAppointments, createAppointment } from '../../actions/appointment_actions';


const mapStateToProps = ({session, appointments, doctors}) => ({
  currentUser: session.currentUser,
  appointments: appointments,
  doctors: doctors
});

const mapDispatchToProps = dispatch => ({
  fetchDoctor: (id) => dispatch(fetchDoctors(id)),
  createAppointment: (data) => dispatch(createAppointment(data))
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm));
