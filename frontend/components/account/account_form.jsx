import React from 'react';
import { withRouter } from 'react-router-dom';

import NavBarContainer from '../navBar/NavBar_Container';

class AccountForm extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
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

    this.update = this.update.bind(this);
  }


  update(field) {
    e => this.setState({[field]: e.target.value});
  }


  render() {
    return (
      <div>
        <NavBarContainer />
        <h1>User Account</h1>
        <div>First Name: {this.state.first_name}</div>
        <div>Last Name: {this.state.last_name}</div>
        <div>Email: {this.state.email}</div>
        <div>Zip: {this.state.zip}</div>
      </div>
    );
  }
}

export default withRouter(AccountForm);
