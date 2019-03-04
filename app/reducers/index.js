import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

function app(state = { fetching: false }, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: user(state.user, action)
      };
    case 'FETCHING':
      return {
        ...state,
        fetching: true
      };
    case 'FETCH_DONE':
      return {
        ...state,
        fetching: false
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

export default combineReducers({
  app,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
