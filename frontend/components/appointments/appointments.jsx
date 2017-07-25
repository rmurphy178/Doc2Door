import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const Appointments = ({ currentUser, logout }) => (
  <div>
    <div className="appointments-index-screen">
    <div className="appointments-index-header">
    <div className="appointments-header-step">
    <div className="appointments-header-inner">

    <div className="navBar">
      <br/>
      <img className="logo" src="http://res.cloudinary.com/dq5wzf090/image/upload/v1500894666/1212_rt3hls.png" />
      <br/>
      <div className="dash-right-corner">
        <div className="offer">Get $20</div>
      <Link to="/appointments">
          <div className="dashboard">Dashboard</div>
      </Link>
      <button className="nav-logout" onClick={logout}>Log Out</button>
      </div>
    </div>
    </div>
    </div>
    </div>
    <h1 className="appointments-welcome-user">Welcome to Doc2Door, {currentUser.first_name}!</h1>
    </div>
  </div>
);


export default withRouter(Appointments);
