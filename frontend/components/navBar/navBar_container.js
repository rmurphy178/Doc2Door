import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navBar';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
