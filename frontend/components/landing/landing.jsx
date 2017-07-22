import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';
import SessionFormContainer from '../session_form/session_form_container';
import SignUpContainer from '../sign_up/sign_up_container';


class Landing extends React.Component {
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
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
    this.props.login(user);
  }


  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  transition(){
    return () => ( $('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
}));
  }


  renderErrors() {
    return(
      <ul>

      </ul>
    );
  }


render() {
  return (

    <section>
    <header className='container'>
      <Link to="/" className="header-link">
        <h1>Doc2Door</h1>
      </Link>
      <GreetingContainer />


  <div className="login-page">
    <div className="form">
      <form className="register-form">
        <input type="text"
          placeholder="First Name"
          value={this.state.first_name}
          onChange={this.update("first_name")}
          />
        <input type="text"
          placeholder="Last Name"
          value={this.state.last_name}
          onChange={this.update("last_name")}
          />
        <input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.update("email")}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")}
            />

            <input
              type="text"
              placeholder="Zip Code"
              value={this.props.city}
              onChange={this.update("zip")}
              className="signup-input"
              />
        <button className="bttn-unite"
          onClick={this.handleSubmit}>
          create
        </button>
        <p className="message">Already registered?
          <Link to="/signup">Sign In</Link>
        </p>
      </form>


      <form className="login-form">
        <br/>
        {this.renderErrors()}
        <input type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.update('email')}
          />
        <input type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.update('password')}
        />
      <button className="bttn-unite"
          onClick={this.handleSubmit}>
          login
        </button>
        <p className="message">Not registered?
        <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  </div>
  </header>
  </section>
    );
  }
}

export default withRouter(Landing);
