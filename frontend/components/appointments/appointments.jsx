import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const Appointments = ({ currentUser, logout }) => (
  <div>
    <span className="navBar">
      <img className="logo" src="http://res.cloudinary.com/dq5wzf090/image/upload/v1500894666/1212_rt3hls.png" />
        <Link to="/appointments">
          <h2 className="dashboard">Dashboard</h2>
        </Link>
      <button className="nav-logout" onClick={logout}>Log Out</button>
    </span>
    <h1>Welcome to Doc2Door, {currentUser.first_name}!</h1>
  </div>
);


export default withRouter(Appointments);
