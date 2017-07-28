import React from 'react';

import { Link, withRouter } from 'react-router-dom';

class DoctorItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedDoctor: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

updateDoctor(doctorId) {
  this.setState({selectedDoctor: this.props.doctors[doctorId]});
}

handleClick(e) {
  e.preventDefault();
  this.props.updateDoctor(this.props.doctor.id, e);
}

  render() {
      const {doctors} = this.props;
    return (
      <div className="doctor-item" key={this.props.doctor.id}>
        <div className="doctor-bio">
          <img src={this.props.doctor.image_url} alt="Doctor Photo" className="doctor-image"/>
          <br/>
          <p className="doctor-detail-1">Name: {this.props.doctor.name}</p>
          <p className="doctor-detail">Specialty: {this.props.doctor.specialty}</p>
          <p className="doctor-detail">Rating: {this.props.doctor.rating}</p>
          <button className="bttn-fill bttn-success" onClick={this.handleClick}>
            Select & Continue
          </button>
        </div>
      </div>
    );
  }
}


export default DoctorItem;
