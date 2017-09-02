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
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    e => this.setState({[field]: e.target.value});
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
           value={this.state.first_name}
           onChange={this.update("first_name")}
           />
       </label>
        <label>Last Name:
          <input type="text"
           value={this.state.last_name}
           onChange={this.update("last_name")}
           />
        </label>
        <label>Email:
          <input type="text"
           value={this.state.email}
           onChange={this.update("email")}
           />
        </label>
        <label>Zip:
          <input type="text"
           value={this.state.zip}
           onChange={this.update("zip")}
           />
        </label>
        </form>
      </div>
    );
  }
}

export default withRouter(AccountForm);
