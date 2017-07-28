
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import DoctorItem from './doctor_item';

class DoctorIndex extends React.Component {
 constructor(props) {
   super(props);
 }

 render() {
   console.log(this.props);
   const {doctors} = this.props;
   return (
         <section className="doctors-list">
           <ul className="doctor-list-step">
             {doctors.map( (doctor, idx) => (
               <Link to={`/doctors/${doctor.id}/`}>
                <li className="doc-list-item" key={idx}>Select this doctor</li>
                <li>{doctor.name}</li>
                <li>{doctor.image_url}</li>
                <li>{doctor.rating}</li>          
                  </Link>
               ))}
           </ul>
       </section>);


     }
}

export default withRouter(DoctorIndex);
