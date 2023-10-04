import { View, Text, Pressable, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import PrimaryButton from '../common/PrimaryButton';

function Register ({ navigation }) {
    const goToLoginScreen = () => {
        navigation.navigate('Login');
      };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Create New Account</Text>
                <Text style={styles.loginHere}>Already Registered? Log in</Text>
                <TouchableOpacity onPress={goToLoginScreen}>
                    <Text>Here</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.registerContainer}>
                <View>
                    <Text style={styles.inputTitle}>Name</Text>
                    <View style={styles.inputContainer}>
                        <TextInput></TextInput>
                    </View>
                    
                </View>
                <View>
                    <Text style={styles.inputTitle}>Email</Text>
                    <View style={styles.inputContainer}>
                        <TextInput></TextInput>
                    </View>
                    
                </View>
                <View>
                    <Text style={styles.inputTitle}>Password</Text>
                    <View style={styles.inputContainer}>
                        <TextInput></TextInput>
                    </View>
                </View>
                <View>
                    <Text style={styles.inputTitle}>Date of Birth</Text>
                    <View style={styles.inputContainer}>
                        <TextInput></TextInput>
                    </View>
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
        paddingVertical: 80,
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
    }

    
})

export default Register;