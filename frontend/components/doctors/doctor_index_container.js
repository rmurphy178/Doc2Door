import { connect } from 'react-redux';
import DoctorIndex from './doctor_index';
import { values } from 'lodash';
import { fetchDoctor, fetchDoctors } from '../../actions/doctor_actions';
import { createAppointment, fetchAppointments, fetchAppointment } from '../../actions/appointment_actions';
import { fetchSpecialties } from '../../actions/specialty_actions';



const mapStateToProps = ({session, doctors, appointments, specialties, appointment_requests}) => ({
  doctors: values(doctors),
  appointment: appointments,
  specialties: specialties,
  appointment_requests: appointment_requests
});

const mapDispatchToProps = dispatch => ({
  fetchDoctor: (doctorId) => dispatch(fetchDoctor(doctorId)),
  fetchDoctors: (filters) => dispatch(fetchDoctors(filters)),
  createAppointment: (data) => dispatch(createAppointment(data)),
  fetchAppointments: () => dispatch(fetchAppointments()),
  fetchSpecialties: (data) => dispatch(fetchSpecialties(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(DoctorIndex);
