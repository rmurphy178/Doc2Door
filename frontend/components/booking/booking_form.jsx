import React from 'react';
import {Link, withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      day: '',
      time: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

componentDidMount(){
  this.props.currentUser;
}



handleSubmit(e) {
  e.preventDefault();
  this.props.createAppointment({specialty: this.state.specialty}).then( () => {
  this.props.history.push('/account');
  });
}


update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}


  render(){
    return (
      <div className="booking-form">
        <h1>Booking & Confirmation</h1>
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
