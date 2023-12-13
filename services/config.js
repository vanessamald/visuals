//import firebase from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementID: process.env.REACT_APP_measurementID
}

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize the auth module
//const auth = getAuth(app);
//const auth = initializeAuth(app, { persistence: 'local', storage: ExpoAsyncStorage });
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

// initilize analytics
//const analytics = getAnalytics(app);

// initialize firestore
const db = getFirestore(app);

//console.log('Firebase initialized with the following configuration:', firebaseConfig);
//console.log('Database URL:', process.env.REACT_APP_databaseURL);

export { db, app, auth };