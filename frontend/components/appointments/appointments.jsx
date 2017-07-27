import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Appointments extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
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
  const specialty = this.state.specialty;
  this.props.fetchSpecialty(specialty).then( () => {
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
      <button>General Practice</button>
      <input className='specialty-input' type='text' value={this.state.specialty} onClick={this.update('general')}/>
    </div>

    <div className='specialty-input-field'>
      <button>Pediatrics</button>
      <input className='specialty-input' type='text' value={this.state.specialty} onClick={this.update('pediatrics')}/>
    </div>

    <div className='specialty-input-field'>
      <button>Allergy & Immunology</button>
      <input className='specialty-input' type='text' value={this.state.specialty} onClick={this.update('allergy')}/>
    </div>

    <div className='specialty-input-field'>
      <button>Endocrinology</button>
      <input className='specialty-input' type='text' value={this.state.specialty} onClick={this.update('endocrinology')}/>
    </div>
    <div className='specialty-input-field'>
      <button>Geriatrics</button>
      <input className='specialty-input' type='text' value={this.state.specialty} onClick={this.update('geriatrics')}/>
    </div>

    <div className='specialty-input-field'>
      <button>Dermatology</button>
      <input className='specialty-input' type='text' value={this.state.specialty} onClick={this.update('dermatology')}/>
    </div>

    <div>
      <span>{this.state.specialty}</span>
      <button className='contest-button' onClick={this.handleSubmit}>Submit</button>
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
