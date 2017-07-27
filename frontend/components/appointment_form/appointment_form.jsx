import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      location: '',
      details: '',
      specialty: '',
    };
  }


    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }




  render() {
    return (
    <div>
      <h1>MD Specialty</h1>
      <form className="appointments-form">
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
