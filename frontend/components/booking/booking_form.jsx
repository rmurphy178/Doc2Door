import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { values, keys } from 'lodash';
import Modal from 'react-awesome-modal';

import NavBarContainer from '../navBar/navBar_container';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: this.props.appointment_requests,
      date: '',
      address: '',
      user_id: '',
      doctor_id: '',
      doctor: props.doctors.name,
      new_appointment: '',
      visible: false,
      specialty: keys(this.props.specialties)[0]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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

componentDidMount(){
  this.props.fetchDoctor(this.props.appointment_requests.doctor_id).then( (result) => {
    this.setState({
      doctor: result.doctor.name,
      specialty: result.doctor.specialty
    });

    this.props.fetchSpecialties({specialty: result.doctor.specialty}).then( (result1) => {
      this.setState({specialty: keys(result1.specialties)[0]});
    });
  });

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


  appt.set('Doctor', this.state.doctor);
  this.setState({new_appointment: appt});
}



handleSubmit(e) {
  e.preventDefault();
  let appointment = this.state;

  alert('Your Appointment has been Booked!');
  this.props.createAppointment(appointment).then( () => {
  this.props.history.push('/home');
  });
}


update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}


  render(){
    
  const appt_info = Array.from(this.state.new_appointment);

    return (
      <div className="booking-form">
        <div className='booking-bg'>
        <div className='booking-main'>
        <NavBarContainer/>
        <h1>Booking & Confirmation</h1>
        <h2>Is this Information Correct?</h2>

        <ul className='appt-ul'>{appt_info.map((el, idx) => (
            <ul className='appt-li' key={idx}>
              <li className='appt-key'>{el[0].slice(0, 1).toUpperCase() + el[0].slice(1)}: </li>
              <li className='appt-value'>{el[1]}</li>
            </ul>
          ))}
        </ul>

            <button className='landing-bttn bttn-gradient' onClick={this.handleSubmit}>
              Confirm Appointment
            </button>
            <button className='landing-bttn-2' onClick={this.props.history.goBack}>
              GO BACK
            </button>

        </div>
        </div>
      </div>
    );
  }
}





export default withRouter(BookingForm);
