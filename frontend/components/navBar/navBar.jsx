import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

logout(e) {
  this.props.logout();
}

render() {
 return(

   <div className="navBar-wrapper">
     <div className="navBar">
            <img className="logo" src="http://res.cloudinary.com/dq5wzf090/image/upload/v1500894666/1212_rt3hls.png" />
                <div className="dash-right-corner">
                  <div className="offer">Get $20</div>
                    <Link to="/appointments">
                      <div className="dashboard">Home</div>
                    </Link>
            <button className="nav-logout" onClick={this.logout}>Log Out</button>
          </div>
        </div>
      </div>
      );
    }
  }

export default withRouter(NavBar);
