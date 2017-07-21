import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>
              <input type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
             <button
               className="login-items"
               onClick={this.handleDemo}>
               Guest Login
             </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
