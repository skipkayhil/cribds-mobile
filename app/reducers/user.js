export default function user(state = {}, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        id: action.payload.id,
        userType: action.payload.userType
      };
    case 'LOGOUT':
      return {};
    case '@@reactReduxFirebase/LOGOUT':
      return {};
    default:
      return state;
  }
}
