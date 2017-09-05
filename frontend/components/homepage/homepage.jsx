import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import HomeNav from './homeNav';
import HomeFooter from './home_footer';


class Homepage extends React.Component {
  constructor(props) {
    super(props);

    }


    render() {
      if(this.props.loggedIn){
        return (
          <Redirect to='/home' />
        );
      } else {
      return (
          <div className='home-screen'>
            <HomeNav />
          <section className="login-signup-background">
              <div className='home'>
                <h1 className='home-header'>Find the right doctor, right now</h1>
                <h2 className='home-subheader'>On-Demand Care in the Comfort of Your Home</h2>
              </div>
          </section>
            <HomeFooter />
          </div>
        );
      }
    }
  }


export default withRouter(Homepage);
