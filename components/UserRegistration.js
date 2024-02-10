import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const UserRegistration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/register/', {
        username,
        password,
      });
      Alert.alert('Success', 'User registered successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to register user');
      console.error('Error registering user:', error);
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
        title="Register"
        onPress={handleRegistration}
      />
    </View>
  );
};

export default UserRegistration;
