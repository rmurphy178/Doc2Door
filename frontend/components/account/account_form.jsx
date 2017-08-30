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
  }




  render() {
    return (
      <div>
        <NavBarContainer />
        <h1>User Account</h1>
      </div>
    );
  }
}

export default withRouter(AccountForm);
