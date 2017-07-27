import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      value: ''
    };
  }


componentDidMount(){
  const docs = this.props.fetchDoctors();
  const specs = this.props.fetchSpecialties();
}


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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

        <form onSubmit={this.handleSubmit}>
     <label>
       Pick select a Specialty:
       <select value={this.state.value} onChange={this.handleChange}>
         <option value="general">Grapefruit</option>
         <option value="pediatrics">Lime</option>
         <option value="allergy">Coconut</option>
         <option value="geriatrics">Mango</option>
         <option value="endocrinology">Mango</option>
         <option value="dermatology">Mango</option>
       </select>
     </label>
     <input type="submit" value="Submit" />
   </form>















      </form>
    </div>
    );
  }
}

export default AppointmentForm;
