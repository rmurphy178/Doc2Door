import * as APIUtil from '../util/appointment_request_api_util';

export const RECEIVE_APPOINTMENT_REQUESTS = "RECEIVE_APPOINTMENT_REQUESTS";
export const RECEIVE_APPOINTMENT_REQUEST = "RECEIVE_APPOINTMENT_REQUEST";
export const RECEIVE_APPOINTMENT_REQUEST_ERRORS = "RECEIVE_APPOINTMENT_REQUEST_ERRORS";

export const receiveAppointmentRequests = appointment_requests => ({
  type: RECEIVE_APPOINTMENT_REQUESTS,
  appointment_requests
});

export const receiveAppointmentRequest = appointment_request => ({
  type: RECEIVE_APPOINTMENT_REQUEST,
  appointment_request
});

export const receiveAppointmentRequestErrors = errors => ({
  type: RECEIVE_APPOINTMENT_REQUEST_ERRORS,
  errors
});


export const fetchAppointmentRequests = filters => dispatch => (
  APIUtil.fetchAppointments(filters).then(appointment_requests => (
    dispatch(receiveAppointmentRequests(appointment_requests))
  ))
);

export const fetchAppointmentRequest = id => dispatch => (
  APIUtil.fetchAppointment(id).then(appointment_request => (
    dispatch(receiveAppointmentRequest(appointment_request))
  ))
);


export const createAppointmentRequest = appointment_request => dispatch => (
  APIUtil.createAppointmentRequest(appointment_request).then(appointment_request => (
    dispatch(receiveAppointmentRequest(appointment_request))
  ), err => (dispatch(receiveAppointmentRequestErrors(err.responseJSON))
  ))
);
