import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const Appointments = ({ currentUser }) => (
  <div>
    <h1>Welcome to Doc2Door, {currentUser.first_name}!</h1>
  </div>
);

const sessionLinks = () => (
  <nav className="greeting-nav">
    <Link to="/greeting">
      <h1>Doc2Door</h1>
    </Link>
    <br/>
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link>
      <Link to="/">
        <h1>Landing</h1>
      </Link>
  </nav>
);


export default withRouter(Appointments);
