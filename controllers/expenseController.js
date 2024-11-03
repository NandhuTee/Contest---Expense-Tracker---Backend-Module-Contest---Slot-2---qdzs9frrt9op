const Expense = require('../models/expenseModel');

exports.addExpense = async (req, res) => {
  try {
    //Write a code here for addExpense
    res
      .status(201)
      .json({ message: 'Expense added successfully', expense: newExpense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.viewExpenses = async (req, res) => {
  try {
    //Write a code here

    res.json({ message: 'View expenses', expenses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update Expense
exports.updateExpense = async (req, res) => {
  try {
    // Write a code here

    res.json({ message: 'Expense updated successfully', expense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
  try {
    //Write a code here

    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
