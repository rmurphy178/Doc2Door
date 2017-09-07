import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../navBar/navBar_container';

import values from 'lodash/values';

class DoctorItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      appointment: this.props.appointment,
      doctor_id: Number(this.props.match.params.doctorId),
      user_id: this.props.currentUser.id,
      address: '',
      date: '',
      errors: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

componentWillReceiveProps() {
  this.setState({appointment: this.props.appointment});
}

componentWillMount() {
  this.props.fetchDoctor(this.props.match.params.doctorId);
  this.setState({appointment: this.props.appointment});
  this.setState({appointment: this.props.appointment});
  this.setState({appointment: this.props.appointment});
  this.setState({appointment: this.props.appointment});
}

handleClick(e) {
  e.preventDefault();
  let appt = this.props.appointment;
  appt.doctor_id = this.state.doctor.doctor_id;
  this.props.createAppointment(appt);
  this.props.history.push('/appointments/new');
}

render() {
  console.log(this.props.appointment);
  console.log(this.state);

  return (
      <div className="doc-show-bg">
        <NavBarContainer/>
          <div className="doctor-item" key={this.props.doctors.id}>
            <div className="doctor-bio">
              <img src={this.props.doctors.image_url} className="doctor-show-image"/>
              <p className="doctor-detail-1">Name: {this.props.doctors.name}</p>
              <p className="doctor-detail">Specialty: {this.props.doctors.specialty}</p>
              <p className="doctors-detail">Rating: {this.props.doctors.rating}</p>
              <button className="landing-bttn bttn-gradient" value={this.props.doctors.id} onClick={this.handleClick}>
                Select & Continue
              </button>
            </div>
          </div>
        </div>
    );
  }
}


export default DoctorItem;
