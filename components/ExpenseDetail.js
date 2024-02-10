import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExpenseDetail = ({ expense }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Details</Text>
      

      <View style={styles.row}>
        <Text style={styles.label}>Amount:</Text>
        <Text>{expense.amount}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Description:</Text>
        <Text>{expense.description}</Text>
      </View>

      {/* Add navigation to go back to the expense list */}
      {/* You can use TouchableOpacity or Button component for navigation */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default ExpenseDetail;
