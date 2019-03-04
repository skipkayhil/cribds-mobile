import { fetching, fetchDone } from './fetch';

export function loginRequest(navigate, username, password, userType) {
  return (dispatch, getState, getFirebase) => {
    console.log('DEV LOGIN = ' + __DEV__);
    if (username === '' && password === '') {
      dispatch(login(userType, 0));
      navigate(userType);
      return;
    }

    dispatch(fetching());
    const firebase = getFirebase();

    firebase
      .login({
        email: username,
        password: password
      })
      .then(result => {
        firebase
          .auth()
          .currentUser.getIdTokenResult()
          .then(({ claims: { userType } }) => {
            console.log(userType + ' LOGGED INTO FIREBASE');
            dispatch(login(userType, result.uid));
            navigate(userType);
            dispatch(fetchDone());
          });
      })
      .catch(error => {
        // TODO: update state with an error to display
        dispatch(fetchDone());
      });
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
