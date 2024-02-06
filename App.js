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


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const navigationRef = React.useRef(null);

  const getCSRFToken = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/csrf-token');

      const data = await response.json();
      return data.csrfToken;
    } catch (error) {
      console.error(error);
    }
  };

  const callApi = async (name) => {
    let result;
    try {
        await fetch('http://localhost:8000/api/'+name+'/', {
            // mode: 'no-cors',
            method: "GET",
        }).then(response => response.json())
            .then(data => {
                result = data; // Assign the value to the result variable
                // console.log(result);
            })
            .catch(error => console.log('error', error));
        console.log(result)
    } catch (error) {
      console.error(error);
    }
  };

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
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name= "Budget" component={BudgetScreen}/>
        <Drawer.Screen name= "Signup" component={SignupScreen}/>
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
      <button onClick={() => callApi('test')}>Call API</button> {/* Add a button to call the API */}
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
