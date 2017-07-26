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

import { fetchSpecialties, fetchSpecialty} from './actions/specialty_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  //begin testing
  window.store = store.getState;
  window.dispatch = store.dispatch;
  window.getState = store.dispatch;
  //end testing


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

window.fetchAppointments = fetchAppointments;
window.fetchAppointment = fetchAppointment;
window.createAppointment = createAppointment;
window.fetchSpecialties = fetchSpecialties;
window.fetchSpecialty = fetchSpecialty;
window.rececive_Specialties = fetchSpecialties;
