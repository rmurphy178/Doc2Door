import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignUpForm from './sign_up_form';
import { signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  errors: session.errors
});

const mapDispatchToProps = ( dispatch ) => ({
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm));
