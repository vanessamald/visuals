import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from "./services/config";
import { StyleSheet, Text, View, ImageBackground, Stylesheet, SafeAreaView } from 'react-native';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import ResetPassword from './screens/ResetPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import { getAuth, onAuthStateChanged } from "firebase/auth";

import { registerRootComponent } from 'expo';
import React, { useEffect, useState } from 'react';

export default function App() {

const Stack = createNativeStackNavigator();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const [ initializing, setInitializing ] = useState(true);
const [ user, setUser ] = useState(null);

const onAuthStateChangedHandler = (user) => {
  setUser(user);
  if (initializing) {
    setInitializing(false);
  }
};

useEffect(() =>{
  const unsubscribe = onAuthStateChanged(auth, onAuthStateChangedHandler);
  return unsubscribe;
}, []);

if (initializing) {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  )
}

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      {user? (
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home}/>
      ) : (
        <>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login}/>
        <Stack.Screen name="Register" options={{ headerShown: false }} component={Register}/>
        <Stack.Screen name="Reset Password" options={{ headerShown: false }} component={ResetPassword}/>
        </>
      )}
      </Stack.Navigator>
    </NavigationContainer>
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

registerRootComponent(App);