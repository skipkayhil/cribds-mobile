export function login(userType, id) {
  return {
    type: 'LOGIN',
    payload: {
      userType,
      id
    }
  };
}

export function logout() {
  return {
    type: 'LOGOUT',
    payload: {}
  };
}
