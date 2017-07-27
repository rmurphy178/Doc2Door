import { connect } from 'react-redux';
import DoctorIndex from './doctor_index';
import { fetchDoctors } from '../../actions/doctor_actions';
import { values } from 'lodash';


const mapStateToProps = (state, ownProps) => ({
  doctors: values(state.doctors),
});


export default connect(
  mapStateToProps,
  null
  )(DoctorIndex);
