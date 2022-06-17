import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
//import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const LoginScreen = ({ navigation }) => {
  const [pswd, setPswd] = useState('');
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection:"row",justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      
        <TouchableOpacity 
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Signup')}>
          <Text Style={{ fontSize: 20, color: 'blue' }}>Login</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};




const styles = StyleSheet.create({
  textStyle: {
    marginTop: 100,
    fontSize: 30,
    color: 'blue',
    textAlign: 'center',
  },
  buttonStyle: {
    marginTop: 25,
    marginLeft: 10,
    width: 120,
    height: 50,
    backgroundColor: 'purple',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
  },
  inputBox: {
    marginLeft: 45,
    marginTop: 10,
    marginBottom: 10,
    width: 200,
    height: 50,
    borderColor: 'green',
    borderWidth: 3,
  },
});

export default LoginScreen;
