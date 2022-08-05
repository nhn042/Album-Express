const express = require("express");
const route = express.Router();
const authController = require('./auth.controller');
const authValidate = require('./auth.validation');
require('dotenv').config({path:'./src/configs/.env'})

route.post('/login', authController.login);
route.post('/register', authValidate.validateRegister, authController.register);

module.exports = route;