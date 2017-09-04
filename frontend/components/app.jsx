import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Homepage from './homepage/homepage';
import SessionFormContainer from './session_form/session_form_container';
import SignUpContainer from './sign_up/sign_up_container';
import LandingContainer from './landing_page/landing_container';
import AppointmentsContainer from './appointments/appointments_container';
import AppointmentFormContainer from './appointment_form/appointment_form_container';
import DoctorIndexContainer from './doctors/doctor_index_container';
import DoctorItemContainer from './doctors/doctor_item_container';
import BookingFormContainer from './booking/booking_form_container';
import AccountFormContainer from './account/account_form_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={Homepage} />
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpContainer} />
      <ProtectedRoute exact path="/home" component={AppointmentsContainer} />
      <ProtectedRoute exact path="/appointments" component={AppointmentFormContainer} />
      <ProtectedRoute exact path="/doctors/:doctorId" component={DoctorItemContainer} />
      <ProtectedRoute exact path="/doctors" component={DoctorIndexContainer} />
      <ProtectedRoute exact path="/appointments/new" component={BookingFormContainer} />
      <ProtectedRoute exact path="/account" component={AccountFormContainer} />
      <ProtectedRoute exact path='/landing' component={LandingContainer} />
      <ProtectedRoute exact path='/account' component={AccountFormContainer} />
    </Switch>
  </div>
);

export default App;
