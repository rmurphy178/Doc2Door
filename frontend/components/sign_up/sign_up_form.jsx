import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      zip: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user).then(() => {
      this.props.history.push('/greeting');
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="login-error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (

      <section className="login-signup-background">


    <div className="login-page">
      <div className="login-signup-form">
        <header className='login-container'>
          <Link to="/greeting" className="header-link">
            <h1>Doc2Door</h1>
          </Link>
        </header>
        <form onSubmit={this.handleSubmit} className="register-form">
          <br/>
          {this.renderErrors()}
          <br/>
              <input
                type="text"
                placeholder="First Name"
                value={this.state.first_name}
                onChange={this.update("first_name")}
                className="signup-input"
                />
              <input
                type="text"
                placeholder="Last Name"
                value={this.state.last_name}
                onChange={this.update("last_name")}
                className="signup-input"
                />
              <input
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update("email")}
                className="signup-input"
                />
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update("password")}
                className="signup-input"
                />
              <input
                type="text"
                placeholder="Zip Code"
                value={this.props.city}
                onChange={this.update("zip")}
                className="signup-input"
                />
            <input className="bttn-jelly bttn-md" type="submit" value="Submit" />
              <p className="message">Already registered?
                <Link to="/">Sign In</Link>
              </p>
        </form>
      </div>
      </div>
      </section>
    );
  }
}

export default withRouter(SignUpForm);
