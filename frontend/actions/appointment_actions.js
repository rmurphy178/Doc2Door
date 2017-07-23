import * as APIUtil from '../util/appointment_api_util';

export const RECEIVE_APPOINTMENTS = "RECEIVE_APPOINTMENTS";
export const RECEIVE_APPOINTMENT = "RECEIVE_APPOINTMENT";

export const receiveAppointments = appointments => ({
  type: RECEIVE_APPOINTMENTS,
  appointments
});

export const receiveAppointment = appointment => ({
  type: RECEIVE_APPOINTMENT,
  appointment
});


export const fetchAppointments = filters => dispatch => (
  APIUtil.fetchAppointments(filters).then(appointments => (
    dispatch(receiveAppointments(appointments))
  ))
);

export const fetchAppointment = id => dispatch => (
  APIUtil.fetchAppointment(id).then(appointment => (
    dispatch(receiveAppointment(appointment))
  ))
);

export const createAppointment = appointment => dispatch => (
  APIUtil.createAppointment(appointment).then(appointment => (
    dispatch(receiveAppointment(appointment))
  ))
);
