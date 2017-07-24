import React from 'react';
import { Link } from 'react-router-dom';



const sessionLinks = () => (
  <nav className="greeting-nav">
    <Link to="/greeting">
      <h1>Doc2Door</h1>
    </Link>
    <br/>
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link>
      <Link to="/">
        <h1>Landing</h1>
      </Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Welcome, {currentUser.first_name}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
