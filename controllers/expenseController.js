const Expense = require('../models/expenseModel');

// Add Expense
exports.addExpense = async (req, res) => {
  try {
    const { amount, category, description } = req.body;
    const userId = req.user.userId; // Assume the user ID is stored in the decoded JWT

    const newExpense = await Expense.create({
      amount,
      category,
      description,
      user: userId,
    });

    res.status(201).json({
      message: 'Expense added successfully',
      expense: newExpense,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// View Expenses
exports.viewExpenses = async (req, res) => {
  try {
    const userId = req.user.userId; // Assume the user ID is stored in the decoded JWT

    const expenses = await Expense.find({ user: userId });

    res.status(200).json({
      message: 'Expenses retrieved successfully',
      expenses,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update Expense
exports.updateExpense = async (req, res) => {
  try {
    const { expenseId } = req.params;
    const { amount, category, description } = req.body;

    const updatedExpense = await Expense.findByIdAndUpdate(
      expenseId,
      { amount, category, description },
      { new: true }
    );

    if (!updatedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.status(200).json({
      message: 'Expense updated successfully',
      expense: updatedExpense,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
  try {
    const { expenseId } = req.params;

    const deletedExpense = await Expense.findByIdAndDelete(expenseId);

    if (!deletedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
