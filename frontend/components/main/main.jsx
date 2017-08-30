import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Landing extends React.Component {
  constructor(props) {
    super(props);

    }


  render() {
    return(
      <div>
        <h1>Welcome to Doc2Door, {this.props.currentUser.first_name}!</h1>
      </div>
    );
  }
}
