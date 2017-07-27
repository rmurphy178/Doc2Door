import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { values } from 'lodash';

class Appointments extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      specialty: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }


update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}

handleSubmit(e) {
  e.preventDefault();
  this.props.fetchDoctors().then( () => {
    this.props.history.push('/appointments');
  });
}

render() {
return(
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
                <button className="nav-logout" onClick={this.props.logout}>Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="appointments-main-body">
      <h1 className="appointments-welcome-user">Welcome to Doc2Door, {this.props.currentUser.first_name}!</h1>
        <h2>HOW TO GET STARTED</h2>
        <h4>We're Excited to Help! Here's how it Works:</h4>
      <ul className="appointments-overview">
        <li>Pick a Specialty</li>
        <li>Get Matched</li>
        <li>Receive Care</li>
      </ul>
      <h3>How We Can Help</h3>
      <ul className="specialties">
        <ul className="specialties-top">
          <li>General Practice</li>
          <li>Pediatrics</li>
          <li>Allergy & Immunology</li>

        </ul>
        <ul className="specialties-bottom">
          <li>Endocrinology</li>
          <li>Geriatrics</li>
          <li>Dermatology</li>
        </ul>
      </ul>
      <div className="btt-container">
      <button className="landing-bttn"
        onClick={this.handleSubmit}>
        Find a Doctor
      </button>
      </div>
      </div>
    </div>
  </div>
  );
  }
}

export default withRouter(Appointments);
