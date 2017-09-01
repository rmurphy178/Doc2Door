import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import DatePicker from 'react-datepicker';

import NavBarContainer from '../navBar/navBar_container';

class AppointmentForm extends React.Component {
  constructor(props) {
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
  }



handleSubmit(e) {
  e.preventDefault();

  let errorFlag = false;
  let errorMessages = [];

  if (this.state.details === '') {
      errorMessages.push('Details cannot be blank');
  }
  if (this.state.specialty === '') {
      errorMessages.push('Please select a specialty');
  }
  if (this.state.address === '') {
      errorMessages.push('Address cannot be blank');
  }

  if (errorMessages[0]) {
    errorFlag = true;
  }

  this.setState({
    errors: errorMessages
  });

  if (errorFlag) {
  } else {
    this.props.fetchDoctors({specialty: this.state.specialty}).then( () => {
    this.props.history.push('/doctors');
    });
  }
}


handleChange(e) {
  e.preventDefault();
  this.setState({specialty: e.target.value});
}


update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}

changeDate(date) {
  this.setState({date: date});
}




  render() {

    const AutocompleteItem = ({ suggestion }) => (<div><i className="fa fa-map-marker"/>{suggestion}</div>);
    const inputProps = { value: this.state.address, onChange: this.onChange };


    return (
    <div>
      <div className="appointments-form">
      <NavBarContainer/>
      <div className="dropdown-container">
      <h1>How can we Help?</h1>
     <h2>Provide Your Address and Any Important Details for Your Physician Here:</h2>

          <form onSubmit={this.handleSubmit}>
            <br/>
              {this.state.errors.map((error, idx) => {
                return (<span key={`error-${idx}`}>{error}</span>);
              })}
            <br/>
         <div className='autocomplete-container'>
           Address
         <PlacesAutoComplete placeholder="Address" inputProps={inputProps} autocompleteItem={AutocompleteItem}/>
         </div>
  <label className="dropdown">
      Choose a Specialty:
      <select value={this.state.specialty} onChange={this.handleChange}>
        <option disabled>Select</option>
        <option value="general">General</option>
        <option value="pediatrics">Pediatrics</option>
        <option value="allergy">Allergy & Immunology</option>
        <option value="geriatrics">Geriatrics</option>
        <option value="endocrinology">Endocrinology</option>
        <option value="dermatology">Dermatology</option>
      </select>
    </label>
    <label>Describe your problem<br/>
      <textarea value={this.state.details} rows='10' cols='40' placeholder=" Provide information for your physician"
      onChange={this.update("details")} className="details-field"/>
      </label>
      <input className='bttn-simple bttn-md' type="submit" value="See Doctors" />
     </form>
     </div>
    </div>
    </div>
    );
  }
}

export default withRouter(AppointmentForm);
