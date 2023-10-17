import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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

// initialize firebase
const app = initializeApp(firebaseConfig);

// initilize analytics
//const analytics = getAnalytics(app);

// initialize firestore
const db = getFirestore(app);

// initialize the auth module
const auth = getAuth(app);
//const auth = getAuth(app, {
   // persistence: getReactNativePersistence(ReactNativeAsyncStorage)
//});

//const firestore = getFirestore(app);
//const storage = getStorage(app);

export { db, app, auth };