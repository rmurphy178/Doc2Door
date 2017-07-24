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
      <h1 className="landing-logo">Doc2Door
      <img src="https://play.spotify.edgekey.net/client/e244a4f/images/logo.png"/>
      </h1>
      <Link to="/">
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
