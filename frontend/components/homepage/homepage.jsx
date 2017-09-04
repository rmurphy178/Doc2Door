import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import HomeNav from './homeNav';


class Homepage extends React.Component {
  constructor(props) {
    super(props);

    }


    render() {
      if(this.props.loggedIn){
        return (
          <Redirect to='/' />
        );
      } else {
      return (
          <section className="login-signup-background">
            <HomeNav />
          </section>
        );
      }
    }
  }


export default withRouter(Homepage);
