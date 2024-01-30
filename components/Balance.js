import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Balance = ({ budgetAmount }) => {
  const [balanceAmount, setBalanceAmount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.title}>{`BALANCE: $${balanceAmount}`}</Text>
        {/* Add logic to update balance amount */}
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#7F6BFB',
    justifyContent: 'center',
  },
  balanceContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 50,
    margin: 20,
    
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    color: '#7F6BFB',
    margin: '5'

  },

  title2: {
    fontSize: 30,
    fontWeight: 700,
    color: '#7F6BFB',
  }
};

export default Balance;
