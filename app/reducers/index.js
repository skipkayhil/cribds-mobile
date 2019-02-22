import { combineReducers } from 'redux';

// Don't use this it's a test...
function _test_user(state = 'refugee', action) {
  switch (action.type) {
    case 'LOGIN':
      return action.payload.userType;
    default:
      return state;
  }
}

export default combineReducers({ _test_user });
