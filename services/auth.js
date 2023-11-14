import { auth } from './config';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
//import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

//const auth = getAuth();

/*
//import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from '@firebase/auth';

export const login = async (email, password) => {
    const auth = getAuth(); // Use getAuth to obtain the auth object
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("user signed in:", user);
      return user;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };
  */

  
export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("user signed in:", user);
        return user;

    } catch (error) {
        console.log(error.message);
        throw error;
    } 
};

export const logout = async () => {
    try {
        auth.signOut();
        console.log('User signed out!');
    }
    catch (error) {
        console.log(error.message);
        throw error;
    }
}


export const emailVerification = async () => {
    const user = auth.currentUser;
    try {
        await emailVerification(auth.currentUser, {
            handleCodeinApp: true,
            url: process.env.REACT_APP_databaseURL,
        }).then(() => {
            showEmailAlert(user.email);
        });
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Email verification error:", errorCode, errorMessage);
        throw error;
    }
};

export const signup = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(auth.currentUser);

        const user = userCredential.user;
        console.log('User registered:', user);
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    };
}






/*
export const signup = async (email, password) => {
    //auth()
    createUserWithEmailAndPassword(auth, email, password)
    .then(()=> {
        console.log('User account created and signed in!');
    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
            console.log("That email address is already in use");
        } 
        if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid.');
        }
        console.error(error);
    })
}
*/