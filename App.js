import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AuthScreens from './screens/AuthScreens';
import BudgetScreen from './screens/BudgetScreen';
import SignupScreen from './screens/SignupScreen';
import { Text, TouchableOpacity } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import fetchMpesaTransactions from './mpesa/ApiClient';
import triggerNotification from './mpesa/NotificationService';
import compareWithBudgets from './mpesa/BudgetLogic';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const UserId = 'user_id';


  

import axios from 'axios';


const App = () => {
  const navigationRef = React.useRef(null);

  const getCSRFToken = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/csrf-token');
      const data = await response.json();
      return data.csrfToken;
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
      // Handle the error, possibly by returning a default value or rethrowing it
      throw error;
    }
  };

  const callApi = async (name) => {
    try {
      const response = await fetch(`http://localhost:8000/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error calling API:', error);
      // Handle the error, possibly by showing a message to the user or retrying the request
      throw error;
    }
  };
  
  const callApi2 = async (name) => {
    try {
      const csrfToken = await getCSRFToken();
      const response = await fetch(`http://localhost:8000/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken
        },
        body: JSON.stringify({ name: 'ijkd' })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error calling API:', error);
      // Handle the error, possibly by showing a message to the user or retrying the request
      throw error;
    }
  };

  const fetchTransactions = async () => {
    try {
      // Call the fetchMpesaTransactions function and pass the user_id
      const response = await fetchMpesaTransactions(UserId);
      const transactions = response.data;
      // Retrieve budgets for the user (optional)
      const budgets = {}; // Retrieve budgets from another API endpoint
      const { exceededBudgets, withinBudgetTransactions } = compareWithBudgets(transactions, budgets);
      // Trigger notifications based on comparison results
      exceededBudgets.forEach((budget) => {
        triggerNotification(`You have exceeded your budget for ${budget.category}.`);
      });
      withinBudgetTransactions.forEach((budget) => {
        triggerNotification(`You are within your budget for ${budget.category}.`);
      });
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  fetchTransactions(); // Call the fetchTransactions function when the component mounts

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the 'Home' screen after 2000 milliseconds (2 seconds)
      navigationRef.current?.navigate('Home');
    }, 2000);

    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
    


    
  }, []); // No dependency array needed

  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name= "Welcome" component={WelcomeScreen}/> 
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name= "Budget" component={BudgetScreen}/>
        <Drawer.Screen name= "Signup" component={SignupScreen}/>
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>

      <TouchableOpacity onPress={() => callApi2('test')} style={styles.button}>
        <Text>Call API</Text>
      </TouchableOpacity>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e57fe',
    
  },
});

export default App;
