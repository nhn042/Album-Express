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
        console.log(user);
        if(user && user.isActive) {
            return jwt.sign({email: user.email , username: user.username}, 'nghia');
        } else {
            throw new Error('500', 'login fail');
        }
    } catch (err) {
        throw err;
    }
}

module.exports = { register, checkLogin }