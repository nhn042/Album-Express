const User = require('./user.model');

const checkUser = async (username) => {
    try{
        //console.log(username);
        const count = await User.userModel.find({
            username: username
        }).count();
      //  console.log(count);
        return !!count;
    } catch (err) {}
};

const finduser = async (id) => {
    try{
        const user = await User.userModel.find({username: id});
        return user;
    } catch(err) {
        console.log(err);
    }
}

const findUserByID = async(id) => {
    try{
        const user = await User.userModel.findById({id: id});
        return user;
    } catch(err) {}
};

const findUserByEmail = async (email) => {
    try{
        const user = await User.userModel.findOne({email: email});
        console.log(user);
        return user;
    } catch(err) {
        console.log(err);
    }
};

const LoginByName = async (username, password) => {
    try {
        const user = await User.userModel.findOne({
            username: username,
            password: password,
        });
        return user;
    } catch(err) {
        console.log(err);
    }
};

const LoginByEmail = async (email, password) => {
    try{
        const user = await User.userModel.findOne({
            email: email,
            password: password
        });
        return user;
    } catch(err) {}
};

const CreateNewUser = async userInfo => {
    console.log(userInfo);
    const user = new User({
        username: userInfo.username,
        password: userInfo.password,
        email: userInfo.email,
        fullname: userInfo.fullname,
        dob: userInfo.dob,
        activeCode: userInfo.activeCode,
    });
    try {
        await user.save();
        return user;
    } catch (err) {
        throw err;
    }
};

module.exports = { findUserByID, LoginByName, LoginByEmail, checkUser, finduser , CreateNewUser, findUserByEmail}