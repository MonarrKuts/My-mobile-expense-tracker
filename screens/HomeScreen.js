import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Modal, TextInput, Text, TouchableOpacity } from 'react-native';
import Balance from '../components/Balance';
import TransactionStatements from '../components/TransactionStatements';
import ExpenseList from '../components/ExpenseList';

const HomeScreen = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: '$0' },
    { id: 2, description: 'Gas', amount: '$0' },
    { id: 3, description: 'Rent', amount: '$0' },
    { id: 4, description: 'Fare', amount: '$0' },
    { id: 5, description: 'Fuel', amount: '$0' },
    { id: 6, description: 'Miscellaneous', amount: '$0' },
    { id: 7, description: 'Savings', amount: '$0' },
    { id: 8, description: 'Shopping', amount: '$0' },
    { id: 9, description: 'Entertainment', amount: '$0' },
    { id: 10, description: 'Toiletries', amount: '$0' },
    { id: 11, description: 'Beauty Products', amount: '$0' },
    { id: 12, description: 'Healthcare', amount: '$0' },
    { id: 13, description: 'Debt', amount: '$0' },
    { id: 14, description: 'Insurance', amount: '$0' },
    { id: 15, description: 'Electricity', amount: '$0' },
    { id: 16, description: 'Water', amount: '$0' },
    { id: 17, description: 'Education', amount: '$0' },
    // Add more expenses as needed
  ]);

  const [selectedExpense, setSelectedExpense] = useState(null);
  const [editAmount, setEditAmount] = useState('');

  const openEditModal = (expense) => {
    setSelectedExpense(expense);
    setEditAmount(expense.amount.replace('$', ''));
  };

  const closeEditModal = () => {
    setSelectedExpense(null);
    setEditAmount('');
  };

  const handleEditAmount = () => {
    // Update the amount for the selected expense
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === selectedExpense.id ? { ...expense, amount: `$${editAmount}` } : expense
      )
    );

    // Close the modal
    closeEditModal();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Balance />
        <TransactionStatements />
        <ExpenseList expenses={expenses} onEdit={openEditModal} />

        {/* Use the Modal component */}
        <Modal visible={!!selectedExpense} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <Text>Edit Amount for {selectedExpense?.description}</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter amount"
              keyboardType="numeric"
              value={editAmount}
              onChangeText={(text) => setEditAmount(text)}
            />
            <TouchableOpacity onPress={handleEditAmount}>
              <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeEditModal}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // Additional styles as needed
  },
  modalContainer: {
    flex: 1,
    fontSize: 50,
    height: 40,
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
    backgroundColor: '#fff',
    padding: 70,
    borderRadius: 50,
    borderTopColor: '#7F6BFB',
    borderWidth: 7,
    margin: 1
  },
  input: {
    height: 60,
    borderColor: '#7F6BFB',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: 220,

    backgroundColor: '#fff'
  },
});

export default HomeScreen;
