import { View, Text, Pressable, StyleSheet } from 'react-native';
import PrimaryButton from '../common/PrimaryButton';
import { StatusBar } from 'expo-status-bar';

function Home ({}) {
    return (
        <View style={styles.container}>
            <PrimaryButton title='Login'/>
            <PrimaryButton title='Register'/>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 80
    }
})

export default Home;