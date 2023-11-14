import { View, Text, Pressable, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Button } from 'react-native';
import PrimaryButton from '../Components/common/PrimaryButton';
import Background from '../Components/common/Background';
import {login, emailVerification, logout, signup } from '../services/auth';
import React, { useEffect, useState } from 'react';

function Login ({ navigation }) {
    const [showEmailMessage, setShowEmailMessage] = useState(false);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleLogin = async () => {
        try {
            const user = await login(email, password);
            if (user) {
                // email verification
                //if (!user.emailVerification) {
                   // setShowEmailMessage(true);
                   // await emailVerification();
                   // await logout();
               // }
            }
        } catch (error) {
            if (
                error.code === 'auth/user-not-found' || 
                error.code === 'auth/wrong-password'
            ) {
                alert('Invalid email or passwrod. Please try again.');
            } else if (error.code === 'auth/too-many-requests') {
                alert ('Too many unsuccessful login attempts. Please try again later.')
            } else  {
                alert('Sign in error:' + error.message);
            }
        }
    }

    const goToRegisterScreen = () => {
        navigation.navigate('Register');
      };

    const goToResetPassword = () => {
        navigation.navigate('Reset Password');
    }

    return (
        <Background>
            <View style={styles.container}> 
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Login to Existing Account</Text>
                    <Text style={styles.registerHere}>New Here?</Text>
                    <TouchableOpacity onPress={goToRegisterScreen}>
                        <Text style={[styles.registerHere, styles.underline]}>Register Here</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginContainer}>
                    <View style={styles.emailContainer}>
                        <Text style={styles.inputTitle}>Email</Text>
                        <View style={styles.inputContainer}>
                            <TextInput 
                                placeholder='Email'
                                keyboardType='email-address'
                                autoCapitalize='none'
                                value={email}
                                onChangeText={setEmail}
                            ></TextInput>
                        </View>
                    </View>
                    <View style={styles.passwordContainer}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder='Password'
                                secureTextEntry
                                autoCapitalize='none'
                                value={password}
                                onChangeText={setPassword}
                            ></TextInput>
                        </View>
                    </View>
                    <View>
                        <Pressable onPress={handleLogin}>
                            <Text>Login</Text>
                        </Pressable>
                       {/* <PrimaryButton title='Login' onPress={handleLogin}/> */}
                    </View>
                    <TouchableOpacity onPress={goToResetPassword}>
                        <Text style={styles.underline}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
            </View> 
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        marginTop: 90
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        backgroundColor: 'transparent',
        textAlign: 'center', 
    },
    titleContainer: {
        backgroundColor: 'transparent',
        marginBottom: 50,
    },
    registerHere: {
        textAlign: 'center',
        
    },
    
    backgroundImage: {
        
    },
    loginContainer: {
        backgroundColor: 'white',
        paddingVertical: 80,
        paddingHorizontal: 20,
        borderRadius: 32,
        marginTop: 10,
    },
    emailContainer: {
        
    },
    passwordContainer: {
        
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

export default Login;