import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class DoctorIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const {doctors} = this.props;
    return (
          <section className="doctors-index">
            <ul className="doctor-index-list">
              {doctors.map(doctor => (
                <li key={doctor.id}>{doctor.id
                }</li>
                ))}
            </ul>
        </section>);
      }
}

export default withRouter(DoctorIndex);
