import { connect } from 'react-redux';

import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
