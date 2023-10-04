import { View, Text, Pressable, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import PrimaryButton from '../common/PrimaryButton';
import Background from '../common/Background';

function Login ({ navigation }) {
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
                            <TextInput></TextInput>
                        </View>
                    </View>
                    <View style={styles.passwordContainer}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <View style={styles.inputContainer}>
                            <TextInput></TextInput>
                        </View>
                    </View>
                    <View>
                        <PrimaryButton title='Login'/>
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