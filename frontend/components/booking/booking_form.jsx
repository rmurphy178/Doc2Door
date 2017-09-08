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
      doctor: this.props.doctors.name,
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
  appt.delete('doctor_id');
  appt.delete('user_id');
  appt.delete('errors');

  let new_appt = {};

  appt.forEach((k, v) => {
    new_appt[k] = v;
  });


  // appt.set('doctor_id', this.state.doctor_id);
  appt.set('Doctor', this.state.doctor);
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

  const appt_info = Array.from(this.state.new_appointment);
  console.log(this.state);

    return (
      <div className="booking-form">
        <NavBarContainer/>
        <h1>Booking & Confirmation</h1>
        <h2>Is this Information Correct?</h2>
        <ul className='appt-ul'>{appt_info.map((el, idx) => (
            <li className='appt-li' key={idx}>
              {el[0].slice(0, 1).toUpperCase() + el[0].slice(1)}: {el[1]}
            </li>
          ))}
        </ul>

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
          <button className='landing-bttn bttn-gradient' onClick={this.handleSubmit}>
            Confirm Appointment
          </button>
        </form>
      </div>
    );
  }
}





export default withRouter(BookingForm);
