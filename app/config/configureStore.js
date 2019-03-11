import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import { login } from '../actions';
import rootReducer from '../reducers';

export const firebaseConfig = {
  apiKey: 'AIzaSyB4dfd5MEGUyLlqvEw6bZZ_IYUCcz0J2gQ',
  authDomain: 'scarp-8329.firebaseapp.com',
  databaseURL: 'https://scarp-8329.firebaseio.com',
  projectId: 'scarp-8329',
  storageBucket: 'scarp-8329.appspot.com',
  messagingSenderId: '845702991958'
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunkMiddleware.withExtraArgument(getFirebase)),
      reactReduxFirebase(firebase, {
        enableLogging: false
      }),
      reduxFirestore(firebase)
    )
  );

  firebase.auth().onAuthStateChanged(user => {
    if (!user) return; // the react-redux-firebase logout action is handled in reducer
    firebase
      .auth()
      .currentUser.getIdTokenResult()
      .then(({ claims: { userType, user_id } }) => {
        userType = userType || 'refugee';
        console.log('UID: ' + user_id + ' has usertype: ' + userType);
        store.dispatch(login(userType, user_id));
      });
  });

  return store;
}
