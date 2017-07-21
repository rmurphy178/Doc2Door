
import { connect } from 'react-redux';

import { signup, clearErrors } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

const mapStateToProps = ({ session }) => ({
  errors: session.errors
});

const mapDispatchToProps = ( dispatch ) => ({
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
