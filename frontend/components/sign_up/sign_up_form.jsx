import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
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
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          {this.renderErrors()}
          <div className="signup-form">
            <label>First Name:
              <input
                type="text"
                value={this.state.first_name}
                onChange={this.update("first_name")}
                className="signup-input"
                />
            </label>
            <br/>
            <label>Last Name:
              <input
                type="text"
                value={this.state.last_name}
                onChange={this.update("last_name")}
                className="signup-input"
                />
            </label>
            <br/>
            <label>Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="signup-input"
                />
            </label>
            <br/>
            <label>Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="signup-input"
                />
            </label>
            <br/>
            <label>Zip Code:
              <input
                type="text"
                value={this.props.city}
                onChange={this.update("zip")}
                className="signup-input"
                />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
