import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

logout(e) {
  this.props.logout().then(() => {
    this.props.history.push('/');
  });
}

render() {


 return (

   <div className="navBar-wrapper">
     <div className="navBar">
        <Link to="/home">
            <img className="logo" src="https://res.cloudinary.com/dq5wzf090/image/upload/v1500894666/1212_rt3hls.png" />
          </Link>
                <div className="dash-right-corner">
                    <Link to="/account">
                      <div className="dashboard">Account</div>
                    </Link>
            <button className="nav-logout" onClick={this.logout}>Log Out</button>
          </div>
        </div>
      </div>
        );

    }
  }

export default withRouter(NavBar);
