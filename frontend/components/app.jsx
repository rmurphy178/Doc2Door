import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpContainer from './sign_up/sign_up_container';


const App = () => (
  <div>
    <section className="main-background">
    <div className="login-signup-forms">
    <header>
      <Link to="/" className="header-link">
        <h1>Doc2Door</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SignUpContainer} />
    </Switch>
    </div>
    </section>
  </div>
);

export default App;
