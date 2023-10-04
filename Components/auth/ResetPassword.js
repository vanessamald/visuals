import { View, Text, Pressable, StyleSheet, ImageBackground, TextInput } from 'react-native';
import PrimaryButton from '../common/PrimaryButton';

function ResetPassword ({}) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Reset Password</Text>
            </View>
            <View style={styles.resetContainer}>
                <Text>Email</Text>
                <View style={styles.inputContainer}>
                    <TextInput></TextInput>
                </View>
                <View>
                    <PrimaryButton title='Reset'/>
                    <Text>Login Here</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100
    },
    title: {
        fontSize: 32,
        backgroundColor: 'transparent',
        textAlign: 'center', 
        marginBottom: 100
    },
    inputContainer: {
        backgroundColor: 'gray',
        opacity: 0.7,
        borderRadius: 8,
        paddingVertical: 10,
        marginBottom: 10
    },
    resetContainer: {
        backgroundColor: 'white',
        paddingVertical: 80,
        paddingHorizontal: 20,
        borderRadius: 32,
        marginTop: 10
    }
})

export default ResetPassword;