const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

//SignUp
router.post('/signUp',userController.signUp);

//Login
router.post('/Login',userController.Login);

module.exports = router;