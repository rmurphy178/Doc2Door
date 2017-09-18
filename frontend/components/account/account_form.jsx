import React from 'react';
import { withRouter } from 'react-router-dom';
import { keys, values} from 'lodash';
import Modal from 'react-awesome-modal';

import NavBarContainer from '../navBar/navBar_container';

class AccountForm extends React.Component {
  constructor(props){
    super(props);
    let user = this.props.currentUser;
    this.state  = {
      email: user.email,
      zip: user.zip,
      first_name: user.first_name,
      last_name: user.last_name,
      id: user.id,
      user_appointments: [],
      visible: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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



  componentDidMount() {
    // this.props.fetchAppointment(this.props.appointments.id);
    this.props.fetchAppointments().then( (result) => {
      this.setState({appointments: result.appointments});
      const appointment_array = Object.keys(result.appointments).map(id => result.appointments[id]);
        let appts = [];
        for (let id in appointment_array){
          if (appointment_array[id].user_id === this.props.currentUser.id) {
            appts.push(appointment_array[id]);
          }
          this.setState({user_appointments: appts});
        }
    });
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state;
    this.props.update(user).then(() => {
      this.props.history.push('/home');
    });
  }


  render() {

    const appointments = this.state.user_appointments;

    return (
      <div>
        <NavBarContainer />
      <div className='account-screen'>
        <form className='account-form' onSubmit={this.handleSubmit} >
        <h1 className='account-header'>Update Account Information</h1>
        <label>First Name:
          <input type="text"
           placeholder={this.state.first_name}
           onChange={this.handleChange("first_name")}
           className="account-input"
           />

       </label>
        <label>Last Name:
          <input type="text"
           placeholder={this.state.last_name}
           onChange={this.handleChange("last_name")}
           className="account-input"
           />
        </label>
        <label>Email:
           <input type="text"
             placeholder={this.state.email}
             onChange={this.handleChange('email')}
             className="account-input"
           />
        </label>
        <label>Zip:
          <input type="text"
           placeholder={this.state.zip}
           onChange={this.handleChange("zip")}
           className="account-input"
           />
        </label>
        <input className="bttn-gradient bttn-md" type="submit" value="Save Changes" />
        <input type="button" className="bttn-gradient bttn-md" value="View Appointments" onClick={() => this.openModal()} />
        </form>

        <section className='account-modal'>
        <Modal visible={this.state.visible} width="700" height="400" effect="fadeInDown" onClickAway={() => this.closeModal()}>
            <div className='account-modal-body'>
              <ul className='user-appointments'>
                <h1 className='modal-header'>Your Appointments</h1>
                {appointments.map( (appointment, idx) => (
                  <ul key={idx} className='display-user-appt'>
                  <li>Appointment {appointment.id}</li>
                  <li>Patient ID: {appointment.user_id}</li>
                  <li>Doctor ID: {appointment.doctor_id}</li>
                  <li>Address: {appointment.address}</li>
                  <li>Date: {appointment.date}</li>
                  <button className='delete-appointment' onClick={() => this.props.deleteAppointment(appointment.id).then( () => {
                      alert('This appointment has been canceled!');
                      this.props.history.push('/home');
                    })}>Cancel Appointment</button>
                </ul>
                ))}
              </ul>
              <a className='close-modal' href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
            </div>
        </Modal>
      </section>
      </div>
      </div>
    );
  }
}

export default withRouter(AccountForm);
