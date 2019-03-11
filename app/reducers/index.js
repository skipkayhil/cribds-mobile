import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import api from './api';
import user from './user';

export default combineReducers({
  app: combineReducers({
    api,
    user
  }),
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
