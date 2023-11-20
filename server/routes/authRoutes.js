const express = require('express');
const { register, login, getAllData } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/getData', getAllData);

module.exports = router;