import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';



const Appointments = ({ appointments }) => (
  <div>
    <h1>Appointments: </h1>
    {appointments.map(appointment => (
      <Appointments
        appointments={appointment}
        key={appointment.id}
      />
    ))}
  </div>
);


export default withRouter(Appointments);
