const express = require('express');
const expenseController = require('../controllers/expenseController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const router = express.Router();

router.use(isLoggedIn);

router.post('/add', isLoggedIn, expenseController.addExpense);

router.get('/view', isLoggedIn, expenseController.viewExpenses);

router.put('/update/:expenseId', isLoggedIn, expenseController.updateExpense);

router.delete(
  '/delete/:expenseId',
  isLoggedIn,
  expenseController.deleteExpense
);

module.exports = router;
