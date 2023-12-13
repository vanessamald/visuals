import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Button } from 'react-native';
import PrimaryButton from '../Components/common/PrimaryButton';
import Background from '../Components/common/Background';
import {login, emailVerification, logout, signup } from '../services/auth';
import saveUserData from '../services/firebaseDatabase';
//import { auth } from '@react-native-firebase/auth';

function Register ({ navigation }) {
    const [ email, setEmail ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ password, setPassword ] = useState('');

    /*
    const handleRegistration = async () => {
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            const user = auth().currentUser;

            // update user
            if (user) {
                await user.updateProfile({
                    displayName: displayName,
                });
            }
        } catch (error) {
            console.error('Registration Error:', error);
        }
    }
    */
    

    
    const handleRegistration = async () => {
        try {
            const user = await signup(email, password);
            if (user) {
                const id = user.id;
                await saveUserData(id, firstName, lastName);
            }
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use. Please choose a different email.')
            } else if (error.code === 'auth/weak-password') {
                alert('Weak password. Please choose a stronger password');
            } else {
                alert ('Registration error:' + error.message);
            }
        } 
   }
   
   

    const goToLoginScreen = () => {
        navigation.navigate('Login');
      };

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Create New Account</Text>
                    <Text style={styles.loginHere}>Already Registered?</Text>
                    <TouchableOpacity onPress={goToLoginScreen}>
                        <Text style={[styles.loginHere, styles.underline]}>Login Here</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.registerContainer}>
                    <View>
                        <Text style={styles.inputTitle}>First Name</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder= 'First Name'
                                value={firstName}
                                onChangeText={(text) => setFirstName(text)}
                            >
                            </TextInput>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>Last Name</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder= 'Last Name'
                                value={lastName}
                                onChangeText={(text) => setLastName(text)}
                            >
                            </TextInput>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>Email</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder= 'Email'
                                autoCapitalize='none'
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            >

                            </TextInput>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>Password</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder='Password'
                                secureTextEntry
                                value={password}
                                onChangeText={(text)=> setPassword(text)}
                            >

                            </TextInput>
                        </View>
                    </View>
                    {/*
                    <View>
                        <Text style={styles.inputTitle}>Date of Birth</Text>
                        <View style={styles.inputContainer}>
                            <TextInput></TextInput>
                        </View>
                    </View>
                    */}
                    <View style={styles.buttonContainer}>
                        <Button title='Sign Up' onPress={handleRegistration}/>
                    </View>
                </View>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
    },
    title: {
        fontSize: 32,
        backgroundColor: 'transparent',
        textAlign: 'center',
    },
    titleContainer: {
        backgroundColor: 'transparent',
        marginBottom: 100,
    },
    registerContainer: {
        backgroundColor: 'white',
        paddingVertical: 50,
        paddingHorizontal: 20,
        borderRadius: 32,
        marginTop: 10
    },
    buttonContainer: {
        
    },
    loginHere: {
        textAlign: 'center',
    },
    inputContainer: {
        backgroundColor: 'gray',
        opacity: 0.7,
        borderRadius: 8,
        paddingVertical: 10,
        marginBottom: 10
    },
    inputTitle: {
        fontSize: 14,
        textTransform: 'uppercase'
    },
    underline: {
        textDecorationLine: 'underline'
    }
})

export default Register;