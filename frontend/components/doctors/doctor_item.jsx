import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../navBar/navBar_container';
import BookingFormContainer from '../booking/booking_form_container';
import Modal from 'react-awesome-modal';

import { values, keys } from 'lodash';


class DoctorItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      appointment: '',
      doctor_id: Number(this.props.match.params.doctorId),
      user_id: this.props.currentUser.id,
      address: this.props.appointments.address,
      date: this.props.appointments.date,
      specialty: keys(this.props.specialties)[0],
      doctor: '',
      doctors: '',
      visible: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
  }

openModal() {
    this.setState({
        visible : true
    });
  }

closeModal() {
    this.setState({
        visible : false
    });
  }

componentWillReceiveProps() {
  this.setState({appointment: this.props.appointment});

  let appt = {};

  appt['user_id'] = this.state.user_id;
  appt['doctor_id'] = this.state.doctor_id;
  appt['address'] = this.state.address;
  appt['date'] = this.state.date;

  this.setState({appointment: appt});
}

componentDidMount() {
  this.props.fetchDoctor(this.props.match.params.doctorId).then( (result) => {
    this.setState({doctor: result.doctor});
  });
  this.props.fetchDoctors({specialty: this.state.specialty}).then( (result) => {
    this.setState({doctors: result.doctors});
  });
}

handleClick(e) {
  e.preventDefault();

  this.props.createAppointmentRequest({appointment_request: this.state.appointment});
  this.props.createAppointment({appointment: this.state.appointment}).then(() => {
      this.props.fetchDoctor(this.state.doctor_id).then( () => {
        this.props.history.push('/appointments/new');
      });
  });
}

render() {
  return (
      <div className="doc-show-bg">
        <NavBarContainer/>

          <section className='booking-modal'>
          <Modal visible={this.state.visible} width="100%" height="100%" effect="fadeInDown" onClickAway={() => this.closeModal()}>
              <div>
                  <BookingFormContainer />
                  <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
              </div>
          </Modal>
        </section>

          <div className="doctor-item" key={this.state.doctor_id}>
            <div className="doctor-bio">
              <img src={this.state.doctor.image_url} className="doctor-show-image"/>
              <p className="doctor-detail-1">Name: {this.state.doctor.name}</p>
              <p className="doctor-detail-specialty">Specialty: {this.state.doctor.specialty}</p>
              <p className="doctors-detail">Patient Rating: {this.state.doctor.rating}%</p>
                <button className="landing-bttn bttn-gradient" value={this.state.doctor.id} onClick={this.handleClick}>
                  Select & Continue
                </button>

                <button className="landing-bttn-2" onClick={this.props.history.goBack}>
                  GO BACK
                </button>

            </div>
            <div className='doc-bio'>
              <label className='bio-label'>
                About {this.state.doctor.name}:
              </label>
              <p className="doctors-detail"> {this.state.doctor.bio}</p>
            </div>

          </div>
        </div>
    );
  }
}


export default DoctorItem;
