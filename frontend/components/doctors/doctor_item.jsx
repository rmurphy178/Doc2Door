import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../navBar/navBar_container';

import values from 'lodash/values';

class DoctorItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      appointment: '',
      doctor_id: Number(this.props.match.params.doctorId),
      user_id: this.props.currentUser.id,
      address: this.props.appointments.address,
      date: this.props.appointments.date
    };
    this.handleClick = this.handleClick.bind(this);
  }

componentWillReceiveProps() {
  this.setState({appointment: this.props.appointment});

  let appt = {};

  appt['user_id'] = this.state.user_id;
  appt['doctor_id'] = this.state.doctor_id;
  appt['address'] = this.state.address;
  appt['date'] = this.state.date;

  this.setState({appointment: appt});
}

componentDidMount() {
  this.props.fetchDoctor(this.props.match.params.doctorId);
}

handleClick(e) {
  e.preventDefault();

  this.props.createAppointment({appointment: this.state.appointment}).then(() => {
      this.props.history.push('/appointments/new');
  });
}

render() {

  return (
      <div className="doc-show-bg">
        <NavBarContainer/>
          <div className="doctor-item" key={this.props.doctors.id}>
            <div className="doctor-bio">
              <img src={this.props.doctors.image_url} className="doctor-show-image"/>
              <p className="doctor-detail-1">Name: {this.props.doctors.name}</p>
              <p className="doctor-detail-specialty">Specialty: {this.props.doctors.specialty}</p>
              <p className="doctors-detail">Patient Rating: {this.props.doctors.rating}%</p>
              <button className="landing-bttn bttn-gradient" value={this.props.doctors.id} onClick={this.handleClick}>
                Select & Continue
              </button>
              <Link to="/home">
              <button className="landing-bttn-2">
                GO BACK
              </button>
              </Link>
            </div>
            <div className='doc-bio'>
              <label className='bio-label'>
                About {this.props.doctors.name}:
              </label>
              <p className="doctors-detail"> {this.props.doctors.bio}</p>
            </div>
          </div>
        </div>
    );
  }
}


export default DoctorItem;
