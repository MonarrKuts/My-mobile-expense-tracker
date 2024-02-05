import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobile Expense Tracker</Text>
      <Text style={styles.subtitle}>Your Money, Your Control</Text>
      <TouchableOpacity onPress={handleSignup}>
        <Text style={styles.signupButton}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e57fe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff', 
  },
  subtitle: {
    fontSize:25,
    fontWeight: '100',
    color: '#fff'
  },
  signupButton: {
    fontSize: 18,
    color: '#6e57fe',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
