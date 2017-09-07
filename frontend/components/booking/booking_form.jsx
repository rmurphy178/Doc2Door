import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import { values, keys } from 'lodash';

import NavBarContainer from '../navBar/navBar_container';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appointment: this.props.appointments,
      date: '',
      address: '',
      user_id: '',
      doctor_id: this.props.doctors.id,
      new_appointment: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

componentDidMount(){
  let key = keys(this.state.appointment);
  let val = values(this.state.appointment);
  const appt = new Map();

  key.forEach((el, idx) => {
    appt.set(el, val[idx]);
  });

  appt.delete('id');

  let new_appt = {};

  appt.forEach((k, v) => {
    new_appt[k] = v;
  });

  appt.set('doctor_id', this.state.doctor_id);
  this.setState({new_appointment: appt});
}



handleSubmit(e) {
  e.preventDefault();
  let appointment = this.state;
  this.props.createAppointment(appointment).then( () => {
  this.props.history.push('/account');
  });
}


update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}


  render(){

    console.log(this.state);

    return (
      <div className="booking-form">
        <NavBarContainer/>
        <h1>Booking & Confirmation</h1>

        <div>{this.state.new_appointment}</div>

        <form onSubmit={this.handleSubmit}>
          <label>
            Choose a day for your appointment:
            <select value={this.state.day} onChange={this.update}>
              <option disabled>Select</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>

            Choose a preferred appointment time:
            <select value={this.state.time} onChange={this.update}>
              <option disabled>Select</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </label>
          <input className='bttn-simple bttn-md' type="submit" value="Confirm Appointment" />
        </form>
      </div>
    );
  }
}





export default withRouter(BookingForm);
