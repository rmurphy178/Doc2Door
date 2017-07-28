import React from 'react';
import {Link, withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }



handleSubmit(e) {
  e.preventDefault();
  this.props.fetchDoctors({specialty: this.state.specialty}).then( () => {
  this.props.history.push('/doctors');
  });
}


handleChange(e) {
  e.preventDefault();
  this.setState({specialty: e.target.value});
}


  render(){
    return (
      <div className="booking-form">
        <h1>Booking & Confirmation</h1>
        <form>
          <label>
            <select>
              Choose a day:
              <option disabled>Select</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>


            <select>
              Choose a time:
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
