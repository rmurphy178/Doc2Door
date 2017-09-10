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
    };
    this.handleClick = this.handleClick.bind(this);
  }

componentWillReceiveProps() {
  this.setState({appointment: this.props.appointment});
}

componentDidMount() {
  this.props.fetchDoctor(this.props.match.params.doctorId);
  this.setState({appointment: this.props.appointment});
}

handleClick(e) {
  e.preventDefault();
  let appt = {};

  appt['user_id'] = this.state.user_id;
  appt['doctor_id'] = this.state.doctor_id;
  appt['address'] = this.state.address;
  appt['date'] = this.state.address;

  this.props.createAppointment(appt);
  this.props.history.push('/appointments/new');
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
            </div>
            <div className='doc-bio'>
                Bio:
              <p className="doctors-detail"> {this.props.doctors.bio}</p>
            </div>
          </div>
        </div>
    );
  }
}


export default DoctorItem;
