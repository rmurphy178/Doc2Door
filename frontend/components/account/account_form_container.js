import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AccountForm from './account_form';
import { fetchDoctors } from '../../actions/doctor_actions';
import { fetchAppointments, createAppointment, fetchAppointment, deleteAppointment } from '../../actions/appointment_actions';
import { update } from '../../actions/session_actions';
import { getUserAppointments } from '../../reducers/selectors';

const mapStateToProps = ({session, appointments}) => ({
  currentUser: session.currentUser,
  appointments: appointments
});

const mapDispatchToProps = dispatch => ({
  fetchDoctor: (id) => dispatch(fetchDoctors(id)),
  createAppointment: (data) => dispatch(createAppointment(data)),
  update: (user) => dispatch(update(user)),
  fetchAppointment: (id) => dispatch(fetchAppointment(id)),
  fetchAppointments: () => dispatch(fetchAppointments()),
  deleteAppointment: (id) => dispatch(deleteAppointment(id))
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountForm));
