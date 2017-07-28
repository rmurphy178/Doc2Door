import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingForm from './booking_form';
import { fetchDoctors } from '../../actions/doctor_actions';
import { fetchAppointments } from '../../actions/appointment_actions';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
  fetchDoctors: (filters) => dispatch(fetchDoctors(filters)),
  fetchAppointments: () => dispatch(fetchAppointments())
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm));
