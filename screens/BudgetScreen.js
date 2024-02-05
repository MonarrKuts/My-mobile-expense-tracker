import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BudgetScreen = () => {
  const [budgetAmount, setBudgetAmount] = useState(0);

  const handleUpdateBudget = () => {
    // Implement your logic to update the budget
    // For now, let's just log the new budget amount
    console.log('Updated Budget Amount:', budgetAmount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Budget </Text>
      <Text style={styles.label}>Current Budget Amount:</Text>
      <Text style={styles.budgetAmount}>{`$${budgetAmount}`}</Text>
      <Text style={styles.label}>Enter New Budget Amount:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter amount"
        onChangeText={(text) => setBudgetAmount(text)}
      />
      <Button title="Update Budget" onPress={handleUpdateBudget} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    
  },
  budgetAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#7F6BFB',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default BudgetScreen;
