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
      <img src="http://res.cloudinary.com/dq5wzf090/image/upload/v1500890681/icon_improved_jzkoqz.png"/>
      </h1>
      <Link to="/login">
        <button className="landing-bttn">
          SIGN UP WITH FACEBOOK
        </button>
      </Link>
      <Link to="/signup">
      <button className="landing-bttn-2">
        SIGN UP WITH YOUR EMAIL ADDRESS
      </button>
      </Link>
      <p className="policy-terms">
        By signing up, you agree to Doc2Door's Terms and Conditions of Use and Privacy Policy
      </p>
      <p className="signup-flow-footer">
        Already have an account? Log in here.
      </p>
        </span>
      </span>
    </span>

    <span className="landing-overview">
      <h1>Find the right doctor, right now</h1>
      <h2>On-Demand Care in the Comfort of Your Home</h2>
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
