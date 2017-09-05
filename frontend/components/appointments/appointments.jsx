import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { values } from 'lodash';
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import DatePicker from 'react-datepicker';


import NavBarContainer from '../navBar/navBar_container';
import AppointmentFormContainer from '../appointment_form/appointment_form_container';

class Appointments extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: '',
      details: '',
      address: '',
      specialty: '',
      errors: []
    };

    this.onChange = (address) => this.setState({ address });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.update = this.update.bind(this);
  }


update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}

handleChange(e) {
  e.preventDefault();
  this.setState({specialty: e.target.value});
}

handleSubmit(e) {
  e.preventDefault();

  let errorFlag = false;
  let errorMessages = [];

  if (this.state.specialty === '') {
      errorMessages.push('Please select a specialty! ');
  }

  if (errorMessages[0]) {
    errorFlag = true;
  }

  this.setState({
    errors: errorMessages
  });

  this.props.history.push('/appointments');
}

render() {

  const AutocompleteItem = ({ suggestion }) => (<div><i className="fa fa-map-marker"/>{suggestion}</div>);
  const inputProps = { value: this.state.address, onChange: this.onChange };

return(
  <div>
    <NavBarContainer />
    <div className="appointments-index-screen">
      <div className="appointments-main-body">
        <span className="welcome-pic">
          <img className="user-pic" src="http://res.cloudinary.com/dq5wzf090/image/upload/v1500882198/doc_icon_ojffjn.png" />
          <h1 className="appointments-welcome-user">Welcome to Doc2Door, {this.props.currentUser.first_name}!</h1>
        </span>
        <h2>HOW TO GET STARTED</h2>
        <h4>We're Excited to Help! Here's how it Works:</h4>
        <ul className="appointments-overview">
          <li>
            <img src="http://res.cloudinary.com/dq5wzf090/image/upload/v1501143963/1_icon_s2mrfa.png" />
              Find a Specialist
            </li>
            <li>
              <img src="http://res.cloudinary.com/dq5wzf090/image/upload/v1501143970/2_icon_iwvs3z.png" />
              Get Matched
            </li>
            <li>
              <img src="http://res.cloudinary.com/dq5wzf090/image/upload/v1501143970/3_icon_sv0oum.png" />
              Receive Care
            </li>
          </ul>
          <h3>How We Can Help</h3>

      <ul className="specialties">
        <ul className="specialties-top">
          <li>General Practice</li>
          <li>Pediatrics</li>
          <li>Allergy & Immunology</li>
        </ul>
        <ul className="specialties-bottom">
          <li>Endocrinology</li>
          <li>Geriatrics</li>
          <li>Dermatology</li>
        </ul>
      </ul>
      <div className="dropdown-container">
      <div className='autocomplete-container'>
        Address:
      <PlacesAutoComplete placeholder="Address" inputProps={inputProps} autocompleteItem={AutocompleteItem}/>
      </div>
      <label className="dropdown">
          Choose a Specialty:
          <select value={this.state.specialty} onChange={this.handleChange}>
            <option value="">Select</option>
            <option value="general">General</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="allergy">Allergy & Immunology</option>
            <option value="geriatrics">Geriatrics</option>
            <option value="endocrinology">Endocrinology</option>
            <option value="dermatology">Dermatology</option>
          </select>
        </label>
      </div>
          <button className="landing-bttn"
            onClick={this.handleSubmit}>
            Find a Doctor
          </button>
      </div>
    </div>
  </div>
  );
  }
}

export default withRouter(Appointments);
