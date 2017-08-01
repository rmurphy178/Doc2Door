import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AccountForm from './account_form';
import { fetchDoctors } from '../../actions/doctor_actions';
import { fetchAppointments, createAppointment } from '../../actions/appointment_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchDoctor: (id) => dispatch(fetchDoctors(id)),
  createAppointment: (data) => dispatch(createAppointment(data))
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountForm));
