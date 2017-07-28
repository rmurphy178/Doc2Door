import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../navBar/navBar_container';

class DoctorItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  }


componentDidMount() {
  this.props.fetchDoctor(this.state.props.match.params.doctorId);
}

handleClick(e) {
  e.preventDefault();
  this.props.fetchDoctor(e.target.value);
    this.props.history.push('/appointments/new');
}

render() {
  console.log(this.props);
  return (
<div>
  <NavBarContainer/>
    <div className="doctor-item" key={this.props.doctor.id}>
      <div className="doctor-bio">
        <img src={this.props.doctor.image_url} alt="Doctor Photo" className="doctor-image"/>
        <br/>
        <p className="doctor-detail-1">Name: {this.props.doctor.name}</p>
        <p className="doctor-detail">Specialty: {this.props.doctor.specialty}</p>
        <p className="doctor-detail">Rating: {this.props.doctor.rating}</p>
        <button className="bttn-fill bttn-success" value={this.props.doctor.id} onClick={this.handleClick}>
          Select & Continue
        </button>
      </div>
    </div>
  </div>
  );
}
}


export default DoctorItem;
