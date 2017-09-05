import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


const HomeFooter = () => (
      <div className="home-footer">
      <div className="myLinks">
        <a href="https://www.linkedin.com/in/ryan-murphy-72a5a821/" alt="linkedin">
          <img className='fa linkedin' src="http://res.cloudinary.com/dq5wzf090/image/upload/v1504576536/LinkedIn-Logo-02_daj9pz.png" />
        </a>
        <a href="https://github.com/rmurphy178" alt="github">
          <img className ='fa github' src="http://res.cloudinary.com/dq5wzf090/image/upload/v1504575454/github_lhdsvh.png" />
        </a>
      </div>
      <label className="myLine">
        Created by Ryan Murphy
      </label>
    </div>
);

export default HomeFooter;