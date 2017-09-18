import * as APIUtil from '../util/appointment_request_api_util';

export const RECEIVE_APPOINTMENT_REQUESTS = "RECEIVE_APPOINTMENT_REQUESTS";
export const RECEIVE_APPOINTMENT_REQUEST = "RECEIVE_APPOINTMENT_REQUEST";
export const RECEIVE_APPOINTMENT_REQUEST_ERRORS = "RECEIVE_APPOINTMENT_REQUEST_ERRORS";

export const receiveAppointmentRequests = requests => ({
  type: RECEIVE_APPOINTMENT_REQUESTS,
  requests
});

export const receiveAppointmentRequest = request => ({
  type: RECEIVE_APPOINTMENT_REQUEST,
  request
});

export const receiveAppointmentRequestErrors = errors => ({
  type: RECEIVE_APPOINTMENT_REQUEST_ERRORS,
  errors
});


export const fetchAppointmentRequests = filters => dispatch => (
  APIUtil.fetchAppointments(filters).then(appointments => (
    dispatch(receiveAppointmentRequests(appointments))
  ))
);

export const fetchAppointmentRequest = id => dispatch => (
  APIUtil.fetchAppointment(id).then(appointment => (
    dispatch(receiveAppointmentRequest(appointment))
  ))
);


export const createAppointmentRequest = request => dispatch => (
  APIUtil.createAppointmentRequest(request).then(result => (
    dispatch(receiveAppointmentRequest(result))
  ), err => (dispatch(receiveAppointmentRequestErrors(err.responseJSON))
  ))
);
