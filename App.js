import { StyleSheet, Text, View, ImageBackground, Stylesheet, SafeAreaView } from 'react-native';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import ResetPassword from './screens/ResetPassword';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { onAuthStateChanged } from "firebase/auth";
import { app, auth } from "./services/config";

import { registerRootComponent } from 'expo';
import React, { useEffect, useState } from 'react';


export default function App() {

const Stack = createNativeStackNavigator();
//const auth = getAuth(app);

const [ initializing, setInitializing ] = useState(true);
const [ user, setUser ] = useState(null);

// handle user state changes
const onAuthStateChangedHandler = (user) => {
  setUser(user);
  if (initializing) {
    setInitializing(false);
  }
};

useEffect(() =>{
  const unsubscribe = onAuthStateChanged(auth, onAuthStateChangedHandler);
  console.log('Initializing worked!')
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
        <Stack.Screen name="Profile" options={{ headerShown: false }} component={Profile}/>
      ) : (
        <>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Profile}/>
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