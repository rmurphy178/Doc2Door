import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      details: '',
      specialty: ''
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


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }



  render() {
    return (
    <div className="appointments-form">
      <div className="dropdown-container">
      <h1>How can we Help?</h1>
     <h2>Provide Details for Your Physician Here</h2>
     <input
       className="details-field"
       type="text"
       placeholder="Details"
       value={this.state.details}
       onChange={this.update('details')}
       />
       <form onSubmit={this.handleSubmit}>
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
    );
  }
}

export default withRouter(AppointmentForm);
