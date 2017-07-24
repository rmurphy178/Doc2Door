import React from 'react';
import { Link } from 'react-router-dom';


const Landing = () => (
  <div className="landing-screen">
  <div className="background-wrapper">
  <div className="landing-wrapper">
  <div className="landing-spread">
    <span className="signup-flow">
      <span className="signup-flow-outer">
        <span className="signup-flow-inner">
      <h1 className="landing-logo">
      <img src="http://res.cloudinary.com/dq5wzf090/image/upload/v1500894666/1212_rt3hls.png"/>
      </h1>
      <Link to="/login">
        <button className="landing-bttn">
          Sign In
        </button>
      </Link>
      <Link to="/signup">
      <button className="landing-bttn-2">
        Sign Up
      </button>
      </Link>
        </span>
      </span>
    </span>

    <span className="landing-overview">
      <h1>Find the right doctor, right now</h1>
      <h2>On-Demand Care in the Comfort of Your Own Home</h2>
      <ul>
        <li>Pick a specialty</li>
        <li>Get Matched</li>
        <li>Receive Care</li>
      </ul>
    </span>
  </div>
  </div>
  </div>
  </div>
);

export default Landing;
