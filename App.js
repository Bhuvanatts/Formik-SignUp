import { StatusBar } from 'expo-status-bar';
import React from "react"
import { StyleSheet, Text, View,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignUpScreen from './screens/SignupScreen';



export default function App() {
  return (
    <View>
    <SignUpScreen/>
    </View>
  );
}

/*const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp:SignUpScreen

  },
  {
    initialRouteName: "Login",
  }
);

const Appcontainer = createAppContainer(navigator);*/
