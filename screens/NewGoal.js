import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/config';

const NewGoal = () => {
    const [ post, setPost ] = useState('');

    //const db = firebase.firestore();

    const handleNewPost = async () => {
        try {
          const postsCollection = collection(db, 'posts');

          // create post data
          const postData = {
            content: post,
            timestamp: serverTimestamp(),
          };
      
          const docRef = await addDoc(postsCollection, postData);
      
          console.log('Document written with ID: ', docRef.id);
          
          return docRef.id;

        } catch (error) {
          console.error('Error adding document: ', error);
          throw error; 
        }
      };

      useEffect(() => {
        console.log('Firestore instance:', db);
        
    }, []);

    return (
        <View>
            <TextInput
                placeholder='Enter your Goal'
                value={post}
                onChangeText={(text) => setPost(text)}
            />

            <Button title='Add Goal' onPress={handleNewPost}></Button>
        </View>
    )
}

export default NewGoal;