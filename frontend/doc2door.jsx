import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {
  fetchAppointments,
  fetchAppointment,
  createAppointment
 }
 from './actions/appointment_actions';

import { fetchDoctors, fetchDoctor} from './actions/doctor_actions';
import {fetchSpecialties, fetchSpecialty} from './actions/specialty_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root);
});
