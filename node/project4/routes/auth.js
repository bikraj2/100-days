const express = require('express');

const router = express.Router();

const { login, register } = require('../controllers/auth');

router.post('/register', register);
router.get('/login', login);

module.exports = router;
