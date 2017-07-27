import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Appointments extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      
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
  const doctors = this.props.fetchDoctors().then( () => {
    this.props.history.push('/appointments/new');
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

      <div className='specialty-form-container'>
  <div className='specialty-form'>
    <h2>How We Can Help</h2>

    <div className='specialty-input-field'>
      <span>General Practice</span>
      <input className='specialty-input' type='text' value={this.state.name} onClick={this.update('name')}/>
    </div>

    <div className='specialty-input-field'>
      <span>Pediatrics</span>
      <input className='specialty-input' type='text' value={this.state.point_value} onClick={this.update('point_value')}/>
    </div>

    <div className='specialty-input-field'>
      <span>Allergy & Immunology</span>
      <input className='specialty-input' type='text' value={this.state.max_contestants} onClick={this.update('max_contestants')}/>
    </div>

    <div className='specialty-input-field'>
      <span>Endocrinology</span>
      <input className='specialty-input' type='text' value={this.state.contest_date} onClick={this.update('contest_date')}/>
    </div>
    <div className='specialty-input-field'>
      <span>Geriatrics</span>
      <input className='specialty-input' type='text' value={this.state.max_contestants} onClick={this.update('max_contestants')}/>
    </div>

    <div className='specialty-input-field'>
      <span>Dermatology</span>
      <input className='specialty-input' type='text' value={this.state.contest_date} onClick={this.update('contest_date')}/>
    </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  );
  }
}

export default withRouter(Appointments);
