import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    const handleLogout = () => {
      // Implement your logout logic here
      // For example, navigate to the Welcome screen
      navigation.navigate('Welcome');
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>User Profile</Text>
        {/* Add other profile details as needed */}
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutButton}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileImage: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    logoutButton: {
      fontSize: 18,
      color: 'red', 
    },
  });
  
  export default ProfileScreen;
  