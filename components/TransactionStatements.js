import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TransactionStatements = () => {
  return (
    <View style={styles.transactionContainer}>
      <Text style={styles.title}>Transaction Statements</Text>
      <TouchableOpacity onPress={() => handleSeeAllClick()}>
        <Text>See All</Text>
      </TouchableOpacity>
      {/* User transaction statements go here */}
    </View>
  );
};

const styles = {
  transactionContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Add more styles as needed
};

export default TransactionStatements;
