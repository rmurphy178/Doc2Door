import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const Appointments = ({ currentUser, logout }) => (
  <div>
    <div clasName="appointments-index-screen">
    <div clasName="appointments-index-container">
    <div clasName="appointments-index-header">
    <div clasName="appointments-header-container">
    <div clasName="appointments-header-step">
    <div clasName="appointments-header-inner">

    <span className="navBar">
      <br/>
      <img className="logo" src="http://res.cloudinary.com/dq5wzf090/image/upload/v1500894666/1212_rt3hls.png" />
      <br/>
      <span clasName="dash-right-corner">
      <Link to="/appointments">
          <h2 className="dashboard">Dashboard</h2>
      </Link>
      <button className="nav-logout" onClick={logout}>Log Out</button>
      </span>
    </span>
    <h1>Welcome to Doc2Door, {currentUser.first_name}!</h1>

    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  </div>
);


export default withRouter(Appointments);
