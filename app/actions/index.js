export function loginRequest(navigate, username, password, userType) {
  return dispatch => {
    // TODO: make a login request to API here, if success then dispatch the login action, if error, dispatch an login error action
    if (username === '' && password === '') {
      dispatch(login(userType, 0));
      navigate(userType);
    } else {
      // TODO: create error action that will update state with an error message to display on LoginScreen
    }
  };
}

function login(userType, id) {
  return {
    type: 'LOGIN',
    payload: {
      userType,
      id
    }
  };
}
