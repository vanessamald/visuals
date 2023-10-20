import { collection, addDoc } from 'firebase/firestore';

async function saveUserData(userId, firstName, lastName) {
    try {
      const userDataRef = collection(db, 'users'); // 'users' is the name of the Firestore collection
  
      // Define the user data to be saved
      const userData = {
        id: userId,
        firstName: firstName,
        lastName: lastName,
        // Add other user data fields as needed
      };
  
      // Add the user data to Firestore
      const docRef = await addDoc(userDataRef, userData);
  
      console.log('User data saved with ID: ', docRef.id);
    } catch (error) {
      console.error('Error saving user data: ', error);
      console.log(error);
      throw error;
    }
  }

export default saveUserData;