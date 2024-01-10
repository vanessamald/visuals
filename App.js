import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import ResetPassword from './screens/ResetPassword';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/config";
import { registerRootComponent } from 'expo';
import React, { useEffect, useState } from 'react';
import NewGoal from './screens/NewGoal';
import Goals from './screens/Goals';

export default function App() {
const Stack = createNativeStackNavigator();

const [ initializing, setInitializing ] = useState(true);
const [ user, setUser ] = useState(null);

// handle user state changes
const onAuthStateChangedHandler = (user) => {
  console.log('onAuthStateChangedHandler - user:', user);
  setUser(user);
  if (initializing) {
    console.log('onAuthStateChangedHandler - Initializing done.');
    setInitializing(false);
  }
};

useEffect(() =>{
  const unsubscribe = onAuthStateChanged(auth, onAuthStateChangedHandler);
  console.log('Initializing worked!')
  return () => unsubscribe();
}, []);

if (initializing) {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  )
}

// profile navigator
function NestedNavigator() {
  return (
    <Stack.Navigator>
      {user ? (
      <Stack.Screen name="Profile">
      {(props) => <Profile {...props} user={user} />}

      </Stack.Screen>
      ) : (
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      )}
      <Stack.Screen name="NewGoal" component={NewGoal} />
      <Stack.Screen name="Goals" component={Goals} />
    </Stack.Navigator>
  );
}


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      {user? (
        <Stack.Screen name="NestedNavigator" component={NestedNavigator} options={{ headerShown: false }} />
      ) : (
        <>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home}/>
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