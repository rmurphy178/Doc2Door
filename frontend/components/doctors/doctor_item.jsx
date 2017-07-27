import React from 'react';

import { Link, withRouter } from 'react-router-dom';

class DoctorItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.updateDoctor(this.props.doctor.id, e);
  }

  render() {
    if (this.props.updateDoctor === undefined) {
      return (
        <li className="doctor-item" key={this.props.doctor.id}>
      {
      }
          <div className="doctor-profile">
            <p className="doctor-detail">{this.props.doctor.name}</p>
            <p className="doctor-detail">{this.props.doctor.}</p>
            <p className="doctor-detail">{this.props.doctor}</p>
            <p className="doctor-detail">{this.props.doctor}</p>
          </div>
        </li>

      );
    }
    return (
      <li className="doctor-item" key={this.props.doctor.id}>
      {
      }
        <div className="doctor-profile">
          <img src={this.props.doctor.imageurl} alt="Doctor Image" className="doctor-image"/>
          <br/>
          <p className="doctor-detail-1">Name: {this.props.doctor.name}</p>
          <p className="doctor-detail">E-mail: {this.props.doctor.email}</p>
          <p className="doctor-detail">Hourly Rate: ${this.props.doctor.price}</p>
          <p className="doctor-detail">Cost: ${this.props.hours*this.props.doctor.price}</p>
          <p className="doctor-detail">Zip Code: {this.props.doctor.zip_code}</p>
          <button className="doctor-button" onClick={this.handleClick}>Select Doctor
          </button>
        </div>
      </li>
    );
  }
}


export default DoctorItem;
