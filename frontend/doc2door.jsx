import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {
  fetchAppointments,
  fetchAppointment,
  createAppointment
}
from './util/appointment_api_util';



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
  window.fetchAppointments = fetchAppointments;
  window.fetchAppointment = fetchAppointment;
  window.createAppointment = createAppointment;
  //end testing


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
