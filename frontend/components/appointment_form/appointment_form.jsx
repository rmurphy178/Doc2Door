import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import DatePicker from 'react-datepicker';

import NavBarContainer from '../navBar/navBar_container';

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: '',
      address: '',
      specialty: '',
    };
    this.onChange = (address) => this.setState({ address });
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


update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}

changeDate(date) {
  this.setState({date: date});
}

renderErrors() {
  return(
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
          {error}
        </li>
      ))}
    </ul>
  );
}

  render() {
    console.log(this.props.errors);
    const AutocompleteItem = ({ suggestion }) => (<div><i className="fa fa-map-marker"/>{suggestion}</div>);
    const inputProps = { value: this.state.address, onChange: this.onChange };


    return (
    <div>
      <div className="appointments-form">
      <NavBarContainer/>
      <div className="dropdown-container">
      <h1>How can we Help?</h1>
     <h2>Provide Your Address and Any Important Details for Your Physician Here:</h2>
       <label>Describe your problem<br/>
         <textarea value={this.state.details} rows='10' cols='40' placeholder=" Provide information for your physician"
         onChange={this.update("details")} className="details-field"/>
         </label>
          <form onSubmit={this.handleSubmit}>
            <br/>
              {this.renderErrors}
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
      <input className='bttn-simple bttn-md' type="submit" value="See Doctors" />
     </form>
     </div>
    </div>
    </div>
    );
  }
}

export default withRouter(AppointmentForm);
