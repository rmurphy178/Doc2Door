import React from 'react';
import moment from 'moment';
import AppointmentForm from '../appointment_form/appointment_form';
import BookingForm from '../booking/booking_form';

class AppointmentRequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 1,

    };

    this.onChange = (address) => this.setState({ address });
    this.changeDate = this.changeDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDoctor = this.updateDoctor.bind(this);
    this.nextForm = this.nextFrom.bind(this);
  }

  formComplete() {

  }

  secondFormComplete() {

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



  render() {



    return (
      <div>Multi-stage form</div>
      );
    }
  }

export default AppointmentRequestForm;
