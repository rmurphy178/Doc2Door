import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import homepage from './homepage';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(homepage);
