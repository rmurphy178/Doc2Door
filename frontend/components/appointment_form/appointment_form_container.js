import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import AppointmentForm from './appointment_form';
import { fetchDoctors } from '../../actions/doctor_actions';
import { fetchSpecialties } from  '../../actions/specialty_actions';
import { fetchAppointments, createAppointment } from '../../actions/appointment_actions';

const mapStateToProps = ({session, specialties, doctors }) => ({
  errors: session.errors,
  currentUser: session.currentUser,
  specialties,
  doctors
});

const mapDispatchToProps = dispatch => ({
  fetchDoctors: (filters) => dispatch(fetchDoctors(filters)),
  fetchAppointments: () => dispatch(fetchAppointments()),
  createAppointment: () => dispatch(createAppointment())
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentForm));
