import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
//This component allows users to input their username and password,
// and upon pressing the "Login" button, it makes an API call to the Django API endpoint
// to obtain a JWT token. If the login is successful, 
//it displays a success message, otherwise, it displays an error message. 

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        username,
        password,
      });
      //  the API should returns a token upon successful login
      const token = response.data.access;
      
      // storing the token in AsyncStorage
         await AsyncStorage.setItem('token', token);
      Alert.alert('Success', 'User logged in successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to login');
      console.error('Error logging in:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
};

export default UserLogin;
