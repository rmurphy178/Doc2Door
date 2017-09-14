
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { values } from 'lodash';
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
     specialty: ''
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


 componentWillMount() {
   this.setState({appointment: this.props.appointment});
   this.setState({address: this.props.appointment.address});
   this.setState({user_id: this.props.appointment.user_id});
   this.setState({date: this.props.appointment.date});
   this.setState({specialty: this.props.specialties});
 }


handleClick(e) {
 e.preventDefault();
 this.setState({selectedDoctor: e.target.value});
  this.props.history.push('appointments/new');
}

render() {

  console.log(this.state);
  console.log(this.props);

  const {doctors} = this.props;

  const specialty = doctors[0].specialty.slice(0, 1)
    .toUpperCase() + doctors[0].specialty.slice(1);


  return (
        <div className='doc-index'>
        <div className="doc-list-bg">
          <NavBarContainer/>
        <div className="doctors-list">
          <h1 className='doc-header'>{specialty} Specialists Available in Your Area</h1>
          <ul className="doc-list-step">
            {doctors.map( (doctor, idx) => (
              <Link to={`/doctors/${doctor.id}/`} key={idx} className="doc-info">
              <li>
              <img src={doctor.image_url} className="doctor-image"/>
              </li>
               <li>Name: {doctor.name}</li>
               <li>Specialty: {doctor.specialty.slice(0, 1).toUpperCase() + doctor.specialty.slice(1)}</li>
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
