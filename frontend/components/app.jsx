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


const App = () => (
  <div>
    <Switch>
      <Route path="/greeting" component={GreetingContainer} />
      <AuthRoute exact path="/" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpContainer} />
      <Route path="/landing" component={LandingContainer} />
    </Switch>
  </div>
);

export default App;
