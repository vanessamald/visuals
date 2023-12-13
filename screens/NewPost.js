import { serverTimestamp } from '@firebase/firestore';
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const NewPost = () => {
    const [ post, setPost ] = useState('');

    const handleNewPost = async () => {
        try {
            const docRef = await addDoc(collection(db, 'Posts'), {
                content: post,
                timestamp: serverTimestamp(),
            });
            console.log('Post Added with ID:', docRef.id);

            // clear post content
            setPost('');
        } catch (error) {
            console.error('Error Adding Post:', error);
        }
    };

    return (
        <View>
            <TextInput
                placeholder='Enter your post'
                value={post}
                onChangeText={(text) => setPost(text)}
            />

            <Button title='Add Post' onPress={handleNewPost}></Button>
        </View>
    )
}

export default NewPost;