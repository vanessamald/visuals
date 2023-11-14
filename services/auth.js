import { auth } from './config';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
 
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