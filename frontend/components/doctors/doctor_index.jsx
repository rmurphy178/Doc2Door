
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { values } from 'lodash';


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
     appointment: null
   };
   this.handleClick = this.handleClick.bind(this);
 }


 componentWillMount() {
   this.setState({appointment: this.props.appointment});
   this.setState({address: this.props.appointment.address});
   this.setState({user_id: this.props.appointment.user_id});
   this.setState({date: this.props.appointment.date});
 }


handleClick(e) {
 e.preventDefault();
 this.setState({selectedDoctor: e.target.value});
   this.props.history.push('/appointments/new');
}

render() {

  const {doctors} = this.props;

  return (
        <div className='doc-index'>
        <div className="doc-list-bg">
          <NavBarContainer/>
        <div className="doctors-list">
          <h1 className='doc-header'>Doctors Available in Your Area</h1>
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
