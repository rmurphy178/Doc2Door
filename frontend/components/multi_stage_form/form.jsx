import React from 'react';
import moment from 'moment';
import NavBarContainer from '../navBar/navBar_container';
import AppointmentForm from '../appointment_form/appointment_form';
import BookingForm from '../booking/booking_form';

class AppointmentRequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,

      form: {
       details: null,
       address: null
      },

      form2: {
       date: moment(),

    },
      errors: null
  };

    this.onChange = (address) => this.setState({ address });
    this.changeDate = this.changeDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDoctor = this.updateDoctor.bind(this);
    this.nextForm = this.nextFrom.bind(this);
  }

  verifyFirstForm() {
   this.missingFields = [];
   if (!this.state.form.details) {
     this.missingFields.push("Please complete field");
   }
   if (!this.state.form.specialty_id) {
     this.missingFields.push("Specialty is a required field");
   }
   if (!this.state.form.address) {
     this.missingFields.push("Address is a required field");
   }

   return (this.state.form.details && this.state.form.specialty_id && this.state.form.address);
 }

  verifySecondForm() {

  }

  nextStep(e) {
    e.preventDefault();
  }

  componentDidMount() {
  }


  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  changeDate(date) {
    this.setState({ date: date});
  }

  updateDoctor(doctor_id) {
    this.setState({doctor_id: doctor_id});
  }

  updateForm(data) {
    this.setState({form: data});
  }

  updateForm2(data) {
    this.setState({form2: data});
  }



  handleSubmit(e) {
    e.preventDefault();
    let appointmentRequest = this.state;
    appointmentRequest.user_id = this.props.currentUser.id;
    appointmentRequest.doctor_id = this.state.doctor_id;
    appointmentRequest.details = this.state.details;
    appointmentRequest.address = this.state.address;
    appointmentRequest.date = appointmentRequest.date.toDate();
    appointmentRequest.rate = this.state.doctor;
    this.props.createAppointmentRequest(appointmentRequest);
  }

  nextStep(e) {
  e.preventDefault();

}

componentDidMount() {
  this.props.fetchSpecialties();
  this.props.fetchDoctors();
}



  render() {



    return (
      <div>Multi-stage form</div>
      );
    }
  }

export default AppointmentRequestForm;
