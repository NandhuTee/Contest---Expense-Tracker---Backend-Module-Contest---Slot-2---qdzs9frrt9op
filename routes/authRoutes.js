const express = require('express');

const { login, signup, decodeToken } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

// Restricted Routes
router.get('/decode', decodeToken);

module.exports = router;
