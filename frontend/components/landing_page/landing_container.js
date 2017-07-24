import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Landing from './landing';

const mapStateToProps = ({ session }) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
