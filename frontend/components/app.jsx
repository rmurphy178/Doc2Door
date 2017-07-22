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
import LandingContainer from './landing/landing_container';


const App = () => (
  <div>
    <Switch>
<<<<<<< HEAD
      <Route path="/greeting" component={GreetingContainer} />
      <AuthRoute exact path="/signup" component={SignUpContainer} />
      <AuthRoute exact path="/" component={SessionFormContainer} />
=======
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SignUpContainer} />
>>>>>>> parent of 1d6f5cf... update user model to protect against mutations when validating
    </Switch>
  </div>
);

export default App;
