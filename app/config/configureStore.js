import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import rootReducer from '../reducers';

const firebaseConfig = {
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
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        thunkMiddleware.withExtraArgument(getFirebase) // Pass getFirebase function as extra argument
      ),
      reactReduxFirebase(firebase, {
        userProfile: 'users',
        useFirestoreForProfile: true,
        enableLogging: false
      }),
      reduxFirestore(firebase)
    )
  );
}
