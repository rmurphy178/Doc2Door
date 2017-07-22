import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/greeting');
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


  handleDemo(e) {
    e.preventDefault();
    let email = "Guest";
    let password = "123456";
    for (let i = 0; i < email.length; i++) {
      setTimeout(() => this.setState({
        email: email.slice(0, i + 1)}), (i * 80));
    }
    for (let j = 0; j < password.length; j++) {
      setTimeout(() => this.setState({
        password: password.slice(0, j + 1)}), ((j + 5) * 80));
    }
    const user = {
      email: 'Guest',
      password: '123456'
    };
    setTimeout(() => this.props.login(user), 1500);
  }


  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
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
    return (
      <section className="login-signup-background">
      <header className='container'>
        <Link to="/greeting" className="header-link">
          <h1>Doc2Door</h1>
        </Link>

    <div className="login-page">
      <div className="form">
        <form onSubmit={this.handleSubmit} className="login-form">
          <br/>
          {this.renderErrors()}
            <br/>
              <input type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />

              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            <input type="submit" value="Submit" />
             <button
               className="login-bttn-jelly bttn-md"
               onClick={this.handleDemo}>
               Guest Login
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

export default withRouter(SessionForm);
