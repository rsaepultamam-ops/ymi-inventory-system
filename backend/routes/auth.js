const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { register, login, getMe, logout } = require('../controllers/authController');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Private routes
router.get('/me', protect, getMe);
router.post('/logout', protect, logout);

module.exports = router;
