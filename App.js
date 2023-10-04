import { StyleSheet, Text, View, ImageBackground, Stylesheet, SafeAreaView } from 'react-native';
import Home from './Components/screens/Home';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';

export default function App() {
  return (
      <ImageBackground
        source={require('./assets/images/background.png')}
        style={styles.backgroundImage}
      >
      <Register/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
