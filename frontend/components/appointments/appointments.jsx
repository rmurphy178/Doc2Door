import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const Appointments = ({ currentUser }) => (
  <div>
    <h1>Welcome to Doc2Door, {currentUser.first_name}!</h1>
  </div>
);


export default withRouter(Appointments);
