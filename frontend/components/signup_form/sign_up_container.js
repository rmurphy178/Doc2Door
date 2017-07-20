
import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

const mapStateToProps = ({ session }) => ({
  errors: session.errors
});

const mapDispatchToProps = ( dispatch ) => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
