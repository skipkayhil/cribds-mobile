import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import LoginScreen from './LoginScreen';

const mapDispatchToProps = dispatch => {
  return {
    login: (navigate, username, password, userType) => {
      dispatch(loginRequest(navigate, username, password, userType));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginScreen);
