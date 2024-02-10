import React from 'react';
import { Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//when the user presses the "Logout" button,
// it triggers the handleLogout function, which clears the authentication token from storage. 
const UserLogout = () => {
  const handleLogout = async () => {
    try {
      // Clear the authentication token from AsyncStorage or any other storage mechanism
      // Here's an example of clearing the token from AsyncStorage
         await AsyncStorage.removeItem('token');
      Alert.alert('Success', 'User logged out successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to logout');
      console.error('Error logging out:', error);
    }
  };

  return (
    <Button
      title="Logout"
      onPress={handleLogout}
    />
  );
};

export default UserLogout;
