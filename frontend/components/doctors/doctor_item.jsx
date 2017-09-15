import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../navBar/navBar_container';

import { values, keys } from 'lodash';


class DoctorItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      appointment: '',
      doctor_id: Number(this.props.match.params.doctorId),
      user_id: this.props.currentUser.id,
      address: this.props.appointments.address,
      date: this.props.appointments.date,
      specialty: keys(this.props.specialties)[0],
      doctor: '',
      doctors: ''
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
  this.props.fetchDoctor(this.props.match.params.doctorId).then( (result) => {
    this.setState({doctor: result.doctor});
  });
  this.props.fetchDoctors({specialty: this.state.specialty}).then( (result) => {
    this.setState({doctors: result.doctors});
  });
}

handleClick(e) {
  e.preventDefault();

  this.props.createAppointment({appointment: this.state.appointment}).then(() => {
      this.props.history.push('/appointments/new');
  });
}

render() {
  console.log(this.state.doctor);

  return (
      <div className="doc-show-bg">
        <NavBarContainer/>
          <div className="doctor-item" key={this.state.doctor_id}>
            <div className="doctor-bio">
              <img src={this.state.doctor.image_url} className="doctor-show-image"/>
              <p className="doctor-detail-1">Name: {this.state.doctor.name}</p>
              <p className="doctor-detail-specialty">Specialty: {this.state.doctor.specialty}</p>
              <p className="doctors-detail">Patient Rating: {this.state.doctor.rating}%</p>
              <button className="landing-bttn bttn-gradient" value={this.state.doctor.id} onClick={this.handleClick}>
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
                About {this.state.doctor.name}:
              </label>
              <p className="doctors-detail"> {this.state.doctor.bio}</p>
            </div>
          </div>
        </div>
    );
  }
}


export default DoctorItem;
