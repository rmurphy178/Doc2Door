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


import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SignUpContainer from './sign_up/sign_up_container';
import LandingContainer from './landing_page/landing_container';
import AppointmentsContainer from './appointments/appointments_container';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={SessionFormContainer} />
      <Route exact path="/signup" component={SignUpContainer} />
      <ProtectedRoute exact path="/appointments" component={AppointmentsContainer} />
      <Route path="/greeting" component={GreetingContainer} />
      <Route path="/" component={LandingContainer} />
    </Switch>
  </div>
);

export default App;
