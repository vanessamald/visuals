import { View, Text, Pressable, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import PrimaryButton from '../common/PrimaryButton';

function Background ({ children }) {
    return (
        <ImageBackground 
        source={require('../../assets/images/backgroundNoTitle.png')}
        style={styles.backgroundImage}
        >
            {children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Background;