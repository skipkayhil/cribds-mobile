import { combineReducers } from 'redux';

function app(state = {}, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: user(state.user, action)
      };
    default:
      return state;
  }
}

function user(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        id: action.payload.id,
        userType: action.payload.userType
      };
    default:
      return state;
  }
}

export default combineReducers({ app });
