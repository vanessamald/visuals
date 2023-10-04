import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import PrimaryButton from '../common/PrimaryButton';
import { StatusBar } from 'expo-status-bar';
import NavigationBar from '../navigation/NavigationBar';

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
            <NavigationBar/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 450
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
      }
})

export default Home;