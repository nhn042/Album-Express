const express = require('express');
const userController = require('./user.controller');
const { createUser, validateActivateUser, validateUpdateUser, validateChangePassword} = require('./user.validation');
const router = express.Router();


router.post('/activate', validateActivateUser, userController.activateUser);
router.post('/createUser', createUser, userController.createUser);
router.put('/update', validateUpdateUser,userController.UpdateInfoUser);
router.patch('/change-password', validateChangePassword, userController.changePassword);

module.exports = router;