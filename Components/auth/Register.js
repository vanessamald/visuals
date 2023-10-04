import { View, Text, Pressable, StyleSheet, ImageBackground, TextInput } from 'react-native';
import PrimaryButton from '../common/PrimaryButton';

function Register ({}) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Create New Account</Text>
                <Text style={styles.loginHere}>Already Registered? Log in here</Text>
            </View>
            <View style={styles.registerContainer}>
                <View>
                    <Text>Name</Text>
                    <TextInput style={styles.inputContainer}></TextInput>
                </View>
                <View>
                    <Text>Email</Text>
                    <TextInput style={styles.inputContainer}></TextInput>
                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput style={styles.inputContainer}></TextInput>
                </View>
                <View>
                    <Text>Date of Birth</Text>
                    <TextInput style={styles.inputContainer}></TextInput>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton title='Sign Up'/>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 32,
        backgroundColor: 'transparent',
        textAlign: 'center',
    },
    registerContainer: {
        backgroundColor: 'white',
        paddingVertical: 100,
        paddingHorizontal: 60,
        borderRadius: 32,
    },
    buttonContainer: {
        
    },
    loginHere: {
        textAlign: 'center'
    },
    inputContainer: {
        backgroundColor: 'gray',
        opacity: 0.7,
        borderRadius: 8,
        paddingVertical: 10
    },

    
})

export default Register;