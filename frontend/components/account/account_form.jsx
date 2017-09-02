import React from 'react';
import { withRouter } from 'react-router-dom';

import NavBarContainer from '../navBar/NavBar_Container';

class AccountForm extends React.Component {
  constructor(props){
    super(props);
    let user = this.props.currentUser;
    let doctor = this.props.doctor;

    this.state  = {
      email: user.email,
      zip: user.zip,
      first_name: user.first_name,
      last_name: user.last_name,
      id: user.id,
      image_url: user.image_url,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state;
    this.props.update(user);
    this.props.history.push('/');
  }


  render() {
    return (
      <div>
        <NavBarContainer />
        <form onSubmit={this.handleSubmit} >
        <h1>Update Account Information</h1>
        <label>First Name:
          <input type="text"
           placeholder="First Name"
           value={this.state.first_name}
           onChange={this.handleChange("first_name")}
           className="account-input"
           />

       </label>
        <label>Last Name:
          <input type="text"
           placeholder="Last Name"
           value={this.state.last_name}
           onChange={this.handleChange("last_name")}
           className="account-input"
           />
        </label>
        <label>Email:
           <input type="text"
             placeholder="Email"
             value={this.state.email}
             onChange={this.handleChange('email')}
             className="account-input"
           />
        </label>
        <label>Zip:
          <input type="text"
           placeholder="Zip Code"
           value={this.state.zip}
           onChange={this.handleChange("zip")}
           className="account-input"
           />
        </label>
        <input className="bttn-gradient bttn-md" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(AccountForm);
