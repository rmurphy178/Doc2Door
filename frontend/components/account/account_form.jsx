import React from 'react';
import { withRouter } from 'react-router-dom';

import NavBarContainer from '../navBar/navBar_Container';

class AccountForm extends React.Component {
  constructor(props){
    super(props);
    let user = this.props.currentUser;
    this.state  = {
      email: user.email,
      zip: user.zip,
      first_name: user.first_name,
      last_name: user.last_name,
      id: user.id
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
    this.props.history.push('/home');
  }


  render() {
    return (
      <div>
        <NavBarContainer />
      <div className='account-screen'>
        <form className='account-form' onSubmit={this.handleSubmit} >
        <h1 className='account-header'>Update Account Information</h1>
        <label>First Name:
          <input type="text"
           placeholder={this.state.first_name}
           onChange={this.handleChange("first_name")}
           className="account-input"
           />

       </label>
        <label>Last Name:
          <input type="text"
           placeholder={this.state.last_name}
           onChange={this.handleChange("last_name")}
           className="account-input"
           />
        </label>
        <label>Email:
           <input type="text"
             placeholder={this.state.email}
             onChange={this.handleChange('email')}
             className="account-input"
           />
        </label>
        <label>Zip:
          <input type="text"
           placeholder={this.state.zip}
           onChange={this.handleChange("zip")}
           className="account-input"
           />
        </label>
        <input className="bttn-gradient bttn-md" type="submit" value="Save Changes" />
        </form>
      </div>
      </div>
    );
  }
}

export default withRouter(AccountForm);
