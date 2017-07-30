import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../navBar/navBar_container';

import values from 'lodash/values';

class DoctorItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      doctor: values(props.doctors).filter(doctor => doctor.id === this.props.match.params.doctorId)
    };
    this.handleClick = this.handleClick.bind(this);
    console.log(this.state);
  }

componentWillReceiveProps() {

}

componentDidMount() {
  this.props.fetchDoctor(this.props.match.params.doctorId);
}

handleClick(e) {
  e.preventDefault();
  this.props.fetchDoctor(e.target.value);
    this.props.history.push('/appointments/new');
}

render() {

  return (
<div clasName="doc-show-bg">
  <NavBarContainer/>
    <div className="doctor-item" key={this.props.doctors.id}>
      <div className="doctor-bio">
        <img src={this.props.doctors.image_url} alt="Doctor Photo" className="doctor-image"/>
        <br/>
        <p className="doctor-detail-1">Name: {this.props.doctors.name}</p>
        <p className="doctor-detail">Specialty: {this.props.doctors.specialty}</p>
        <p className="doctors-detail">Rating: {this.props.doctors.rating}</p>
        <button className="bttn-fill bttn-success" value={this.props.doctors.id} onClick={this.handleClick}>
          Select & Continue
        </button>
      </div>
    </div>
  </div>
  );
}
}


export default DoctorItem;
