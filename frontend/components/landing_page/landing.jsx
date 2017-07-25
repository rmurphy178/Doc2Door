import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const Landing = () => (
  <div className="landing-screen">
  <div className="background-wrapper">
  <div className="landing-wrapper">
  <div className="landing-spread">
    <div className="signup-flow">
      <div className="signup-flow-outer">
        <div className="signup-flow-inner">
      <h1 className="landing-logo">
      <img src="http://res.cloudinary.com/dq5wzf090/image/upload/v1500894666/1212_rt3hls.png"/>
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
      <div className="policy-terms">
        By signing up, you agree to Doc2Door's Terms and Conditions of Use and Privacy Policy
      </div>
      <div className="signup-flow-footer">
        <Link to="/login">
          Already have an account? Log in here.
        </Link>
      </div>
    </div>
  </div>
</div>

    <div className="landing-overview">
      <h1>Find the right doctor, right now</h1>
      <h2>On-Demand Care in the Comfort of Your Home</h2>
      <ul>
        <li>Pick a specialty</li>
        <li>Get Matched</li>
        <li>Receive Care</li>
      </ul>
    </div>
  </div>
  </div>
  </div>
  </div>
);

export default withRouter(Landing);
