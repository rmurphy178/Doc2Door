import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      details: '',
      specialty: ''
    };
  }


    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }


    componentWillUnmount() {
      this.props.clearErrors();
    }


    renderErrors() {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li className="login-error" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }

  render() {
    return (
    <div>
      <h1>MD Specialty</h1>
      <form className="appointments-form">
        <br/>
        {this.renderErrors()}
        <br/>
        <input type="text"
          placeholder="Address"
          value={this.state.location}
          onChange={this.update('location')}
          />
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
