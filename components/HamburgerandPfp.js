import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

//is there any point to this code, its just sitting there 
//should delete



const HamburgerandPfp = ({navigation}) => {
  const handleHamburgerClick = () => {
    // Logic to open hamburger menu
    console.log('Hamburger clicked!');
    // im using React Navigation Drawer in app js, open the drawer
    navigation.openDrawer();
  };

  const handleProfileClick = () => {
    // Logic to open user profile
    console.log('Profile clicked!');
    // For example, navigate to the profile screen
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => handleHamburgerClick()}>
        {/*hamburger icon */} 
      </TouchableOpacity>
      <Text style={styles.title}>Hello!</Text>
      <TouchableOpacity onPress={() => handleProfileClick()}>
        {/* Ypfp*/}
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#6E57FE',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
};

export default HamburgerandPfp.js;
