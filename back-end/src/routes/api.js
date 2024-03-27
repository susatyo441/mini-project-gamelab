const express = require('express');
const userController = require('../controller/user-controller.js');
const { authentication } = require('../middleware/auth-middleware.js');
const router = express.Router();

router.post('/login', userController.login);
router.post('/logout', authentication, userController.logout);


module.exports = router