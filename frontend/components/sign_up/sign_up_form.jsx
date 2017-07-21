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
            <label>
              <input
                type="text"
                placeholder="First Name"
                value={this.state.first_name}
                onChange={this.update("first_name")}
                className="signup-input"
                />
            </label>
            <br/>
            <label>
              <input
                type="text"
                placeholder="Last Name"
                value={this.state.last_name}
                onChange={this.update("last_name")}
                className="signup-input"
                />
            </label>
            <br/>
            <label>
              <input
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update("email")}
                className="signup-input"
                />
            </label>
            <br/>
            <label>
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update("password")}
                className="signup-input"
                />
            </label>
            <br/>
            <label>
              <input
                type="text"
                placeholder="Zip Code"
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
