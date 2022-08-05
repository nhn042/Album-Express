const { MongoUnexpectedServerResponseError } = require('mongodb');
const userService = require('../users/user.service');
const userRep = require('../users/user.repository');
const utils = require('../../utils/function.utils');
const {userModel} = require('../users/user.model');
const User = userModel;
const jwt = require('jsonwebtoken');

const register = async (username, password, email, fullname, dob) => {
    try {
        const user = await userService.createUser(
            username,
            password, 
            email, 
            fullname, 
            dob);
        user.save();
        return user;
    } catch(err) {
        throw err;
    }
};

const checkLogin = async (username, password) => {
    try{

        const user = await userRep.LoginByName(username, password);
        if(user && user.isActive) {
            return jwt.sign({user}, 'mk');
        } else {
            throw new Error('500', 'login fail');
        }
    } catch (err) {
        throw err;
    }
}

module.exports = { register, checkLogin }