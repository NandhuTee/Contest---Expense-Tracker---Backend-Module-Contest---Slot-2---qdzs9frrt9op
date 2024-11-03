const router = require('express').Router();

router.use('/auth', require('./authRoutes'));
router.use('/expense', require('./expenseRoutes'));

module.exports = router;
