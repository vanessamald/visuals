import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import PrimaryButton from '../common/PrimaryButton';
import { StatusBar } from 'expo-status-bar';

function Home ({ navigation }) {
    return (
        <ImageBackground
            source={require('../../assets/images/background.png')}
            style={styles.backgroundImage}
      >
        <View style={styles.container}>
            <PrimaryButton title='Login' navigation={navigation}/>
            <PrimaryButton title='Register' navigation={navigation}/>
            <StatusBar style="auto" />
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
      }
})

export default Home;