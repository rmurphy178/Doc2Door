
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { keys, values } from 'lodash';
import Modal from 'react-awesome-modal';

import NavBarContainer from '../navBar/navBar_container';
import DoctorItem from './doctor_item';

class DoctorIndex extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     date: '',
     address: '',
     user_id: '',
     doctor_id: '',
     errors: [],
     appointment: null,
     visible: false,
     specialty: '',
     doctors: ''
   };
   this.handleClick = this.handleClick.bind(this);
 }


openModal() {
    this.setState({
        visible : true
    });
  }

closeModal() {
    this.setState({
        visible : false
    });
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
   this.setState({appointment: this.props.appointment});
   this.setState({address: this.props.appointment.address});
   this.setState({user_id: this.props.appointment.user_id});
   this.setState({date: this.props.appointment.date});
   this.props.fetchSpecialties({specialty: this.props.doctors[0].specialty}).then( (result) => {
     this.setState({specialty: keys(result.specialties)[0]});
   });
   this.props.fetchDoctors({specialty: this.props.doctors[0].specialty}).then( (result) => {
     this.setState({doctors: result.doctors});
   });
 }


handleClick(e) {
 e.preventDefault();
 this.setState({selectedDoctor: e.target.value});
  this.props.history.push('appointments/new');
}

render() {
  const doctors = this.state.doctors;


  return (
        <div className='doc-index'>
        <div className="doc-list-bg">
          <NavBarContainer/>
        <div className="doctors-list">
          <h1 className='doc-header'>{this.state.specialty} Specialists Available in Your Area</h1>
          <ul className="doc-list-step">
            {values(doctors).map( (doctor, idx) => (
              <Link to={`/doctors/${doctor.id}/`} key={idx} className="doc-info">
              <li>
              <img src={doctor.image_url} className="doctor-image"/>
              </li>
               <li>Name: {doctor.name}</li>
               <li>Specialty: {this.state.specialty.slice(0, 1).toUpperCase() + this.state.specialty.slice(1)}</li>
               <li>Patient Rating: {doctor.rating}%</li>
                 </Link>
              ))}
          </ul>
      </div>
      </div>
     </div>
    );
  }
}

export default withRouter(DoctorIndex);
