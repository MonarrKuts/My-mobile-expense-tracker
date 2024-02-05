import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const ExpenseList = ({ expenses, onEdit }) => {
  return (
    <View style={styles.expenseList}>
      <Text style={styles.heading}>Expense List</Text>
      <View>
        {expenses.map((expense) => (
          <TouchableOpacity
            key={expense.id}
            style={styles.expenseItem}
            onPress={() => onEdit(expense)} // Pass the specific expense to onEdit
          >
            <Text>{expense.description}</Text>
            <Text>{expense.amount}</Text>
            {/* Need to add more details  */}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  expenseList: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editInput: {
    height: 30,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    textAlign: 'center',
  },
  editButton: {
    color: 'blue',
  },
});

export default ExpenseList;
