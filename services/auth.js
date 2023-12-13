import { auth } from './config';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
 
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
        await sendEmailVerification(auth.currentUser, {
            handleCodeInApp: true,
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

export const signup = async (email, password, firstName, lastName) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password, firstName, lastName);
        
         // Update user's display name
         await updateProfile(userCredential.user, {
            displayName: `${firstName} ${lastName}`,
        });
        
        await sendEmailVerification(auth.currentUser);

        const user = userCredential.user;
        console.log('User registered:', user);
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    };
}

export const updateUserPhotoURL = async (newPhotoURL) => {
    try {
      // Update the user's photoURL in Firebase Auth
      await updateProfile(auth.currentUser, { photoURL: newPhotoURL });
  
      console.log('User photoURL updated successfully');
    } catch (error) {
      console.error('Error updating user photoURL:', error.message);
      throw error;
    }
  };