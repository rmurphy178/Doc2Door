import { connect } from 'react-redux';
import { Link, withRouteer } from 'react-router-dom';


const mapStateToProps = ({ appointments }) => {
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
