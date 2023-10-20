
import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

//import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: String(process.env.REACT_APP_apiKey),
    authDomain: String(process.env.REACT_APP_authDomain),
    databaseURL: String(process.env.REACT_APP_databaseURL),
    projectId: String(process.env.REACT_APP_projectId),
    storageBucket: String(process.env.REACT_APP_storageBucket),
    messagingSenderId: String(process.env.REACT_APP_messagingSenderId),
    appId: String(process.env.REACT_APP_appId),
    measurementID: String(process.env.REACT_APP_measurementID)
}

console.log(firebaseConfig.apiKey);
console.log(firebaseConfig.projectId);
/*
// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize the auth module
const auth = getAuth(app);

// initilize analytics
//const analytics = getAnalytics(app);

// initialize firestore
const db = getFirestore(app);

export { db, app, auth };
*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);

// Firebase Auth
//const auth = firebase.auth();
const auth = getAuth(app);

// Firebase Realtime Database
//const database = firebase.database();
const db = getFirestore(app);

// Verify Firebase Authentication
const user = auth.currentUser;
if (user) {
  console.log('Current User:', user.uid);
} else {
  console.log('No user is signed in.');
}
/*

// Database Example
const databaseRef = db.ref('example');
db.set('Hello, Firebase!')
  .then(() => {
    console.log('Data written to the database.');
  })
  .catch((error) => {
    console.error('Error writing data:', error);
  });
  */
console.log('Firebase initialized with the following configuration:', app.options);
 

export { app, auth, db };