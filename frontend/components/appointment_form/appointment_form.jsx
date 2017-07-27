import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      location: '',
      details: '',
      specialties: '',
    };
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount() {
    this.props.fetchDoctors();
    this.props.fetchSpecialties();
    this.props.fetchAppointments();
  }



  render() {
    return (
    <div className="appointments-form">
      <h1>MD Specialty</h1>
      <h2>{this.state.doctors}</h2>
      <form className="appointments-form-fields">
        Enter Address Here:
        <input type="text"
          placeholder="Address"
          value={this.state.location}
          onChange={this.update('location')}
          />
        Provide Details Here:
        <input type="text"
          placeholder="Details"
          value={this.state.details}
          onChange={this.update('details')}
          />
        <button>
          Save
        </button>
      </form>
    </div>
    );
  }
}

export default AppointmentForm;
