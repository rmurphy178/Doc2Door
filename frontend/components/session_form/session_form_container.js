import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';



const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = ( dispatch ) => ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
