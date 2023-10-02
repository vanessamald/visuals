import { View, Text, Pressable, StyleSheet, ImageBackground, TextInput } from 'react-native';
import PrimaryButton from '../common/PrimaryButton';

function Login ({}) {
    return (
        <View style={styles.container}
            //style={styles.backgroundImage}
            //source={require('../../assets/images/backgroundNoTitle.png')}
        > 
            <Text style={styles.title}>Login to Existing Account</Text>
            <Text style={styles.registerHere}>New Here? Register Here</Text>
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
                <Text>Forgot Password</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 150
    },
    title: {
        fontSize: 32,
        backgroundColor: 'transparent',
        textAlign: 'center', 
    },
    registerHere: {
        textAlign: 'center',
        marginBottom: 100,
    },
    titleContainer: {
        backgroundColor: 'transparent'
    },
    backgroundImage: {
        
    },
    loginContainer: {
        backgroundColor: 'white',
        paddingVertical: 80,
        paddingHorizontal: 20,
        borderRadius: 32,
    },
    emailContainer: {
        
    },
    passwordContainer: {
        
    },
    inputContainer: {
        backgroundColor: 'gray',
        opacity: 0.7,
        borderRadius: 8,
        paddingVertical: 10
    },
    inputTitle: {
        fontSize: 14,
        textTransform: 'uppercase'
    }
})

export default Login;