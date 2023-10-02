import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Stylesheet, SafeAreaView } from 'react-native';

export default function App() {
  return (
      <ImageBackground
        source={require('./assets/images/background.png')}
        style={styles.backgroundImage}
      >
      <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
