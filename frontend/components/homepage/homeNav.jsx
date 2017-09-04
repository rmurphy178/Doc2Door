import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


const HomeNav = () => (

      <div className="navBar-wrapper">
        <div className="navBar">
               <img className="logo" src="http://res.cloudinary.com/dq5wzf090/image/upload/v1500894666/1212_rt3hls.png" />
                   <div className="dash-right-corner">
                       <Link to="/login">
                         <div className="dashboard">Login</div>
                       </Link>
                       <Link to='/signup'>
                         <button className="nav-logout">SignUp</button>
                       </Link>
             </div>
           </div>
         </div>
       );


export default HomeNav;
