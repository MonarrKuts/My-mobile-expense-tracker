import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AuthScreens from './screens/AuthScreens';
import BudgetScreen from './screens/BudgetScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const navigationRef = React.useRef(null);

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
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name= "Budget" component={BudgetScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e57fe',
    // Additional styles as needed
  },
});

export default App;
