import { fetching } from './fetch';

export function loginRequest(navigate, username, password, userType, callback) {
  return (dispatch, getState, getFirebase) => {
    if (username === '' && password === '') {
      dispatch(login(userType, 0));
      return navigate(userType);
    }

    dispatch(fetching());

    const firebase = getFirebase();
    firebase
      .login({
        email: username,
        password: password
      })
      .then(result => firebase.auth().currentUser.getIdTokenResult())
      .then(({ claims: { userType } }) => {
        console.log('Usertype: ' + userType);
        dispatch(login(userType, firebase.auth().currentUser.uid));
        navigate(userType);
      })
      .catch(error => dispatch(loginError(error.message)));
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

function loginError(error) {
  return {
    type: 'LOGIN_ERROR',
    payload: {
      error
    }
  };
}
