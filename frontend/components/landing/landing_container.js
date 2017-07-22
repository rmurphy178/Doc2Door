import { connect } from 'react-redux';

import { login, signup, clearErrors } from '../../actions/session_actions';
import Landing from './landing';

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
)(Landing);
