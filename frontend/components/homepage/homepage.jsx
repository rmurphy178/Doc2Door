import React from 'react';
import { Link, withRouter } from 'react-router-dom';


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
            <div className="login-page">
              <div className="login-signup-form">
                <header className='login-container'>
                  <Link to="/greeting" className="header-link">
                    <img src="http://res.cloudinary.com/dq5wzf090/image/upload/v1500894666/1212_rt3hls.png"/>
                  </Link>
                </header>
              </div>
            </div>
          </section>
        );
      }
    }
  }


export default withRouter(Homepage);
