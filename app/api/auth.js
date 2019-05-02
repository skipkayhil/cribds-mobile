import { getFirestore } from 'redux-firestore';
import { firebaseConfig } from '../config/configureStore';

const URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';

function registerEmployee(email, password) {
  const ENDPOINT = `${URL}/signupNewUser?key=${firebaseConfig.apiKey}`;
  console.log(ENDPOINT);
  console.log('registerEmployee');
  return fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, returnSecureToken: true })
  })
    .then(response => response.json())
    .then(json => {
      /*
				kind 					string 	The request type, always "identitytoolkit#SignupNewUserResponse".
				idToken 			string 	A Firebase Auth ID token for the newly created user.
				email 				string 	The email for the newly created user.
				refreshToken 	string 	A Firebase Auth refresh token for the newly created user.
				expiresIn 		string 	The number of seconds in which the ID token expires.
				localId 			string 	The uid of the newly created user.
			*/
      if (json.error) {
        // https://github.com/firebase/firebase-js-sdk/blob/6b53e0058483c9002d2fe56119f86fc9fb96b56c/packages/auth/src/error_auth.js

        switch (json.error.message) {
          case 'INVALID_EMAIL':
            return 'The email address is badly formatted.';
          case 'EMAIL_EXISTS':
            return 'The email address is already in use by another account.';
          default:
            console.warn(json.error.message + ' DOES NOT HAVE A MESSAGE');
            return 'An unknown error occured';
        }
      }

      // else no error, add UID to the database so it gets a claim
      const firestore = getFirestore();
      firestore.set({ collection: 'employees', doc: json.localId }, { email });
    });
}

function registerRefugee(email, password, profile) {
  const ENDPOINT = `${URL}/signupNewUser?key=${firebaseConfig.apiKey}`;
  console.log(ENDPOINT);
  console.log('registerRefugee');
  return fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, returnSecureToken: true })
  })
    .then(response => response.json())
    .then(json => {
      /*
				kind 					string 	The request type, always "identitytoolkit#SignupNewUserResponse".
				idToken 			string 	A Firebase Auth ID token for the newly created user.
				email 				string 	The email for the newly created user.
				refreshToken 	string 	A Firebase Auth refresh token for the newly created user.
				expiresIn 		string 	The number of seconds in which the ID token expires.
				localId 			string 	The uid of the newly created user.
			*/
      if (json.error) {
        // https://github.com/firebase/firebase-js-sdk/blob/6b53e0058483c9002d2fe56119f86fc9fb96b56c/packages/auth/src/error_auth.js

        switch (json.error.message) {
          case 'INVALID_EMAIL':
            return 'The email address is badly formatted.';
          case 'EMAIL_EXISTS':
            return 'The email address is already in use by another account.';
          default:
            console.warn(json.error.message + ' DOES NOT HAVE A MESSAGE');
            return 'An unknown error occured';
        }
      }

      // else no error, add UID to the database so it gets a claim
      const firestore = getFirestore();
      firestore.set(
        { collection: 'refugees', doc: json.localId },
        { ...profile }
      );
    });
}

export default { registerEmployee, registerRefugee };
