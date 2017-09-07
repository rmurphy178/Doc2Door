
import React from 'react';
import { Link, withRouter } from 'react-router-dom';


import NavBarContainer from '../navBar/navBar_container';

import DoctorItem from './doctor_item';

class DoctorIndex extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     date: '',
     details: '',
     address: '',
     specialty: '',
     errors: []
   };
   this.handleClick = this.handleClick.bind(this);
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
               <li>Specialty: {doctor.specialty}</li>
               <li>Rating: {doctor.rating}</li>
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
