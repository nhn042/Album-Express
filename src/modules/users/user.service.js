require('dotenv').config({ path: '../../configs/.env' });
const userRep = require('./user.repository');
const functionUtils = require('../../utils/function.utils');
const activateUser = async (email, otp) => {
    const user = await userRep.findUserByEmail(email);
    //console.log(user);
    const otpCode = user.activeCode;
    console.log(otpCode, " + ",  otp);
    if (otp === otpCode) {
        user.isActive = true;
        await user.save();
        return true;
    } else {
        return false;
    }
}

const createNewUser = async (userRegister) => {
    if (
        !(await userRepo.checkUserExists(
            userRegister.username,
            userRegister.password,
            userRegister.email
        ))
    ) {
        const newUser = await userRepo.createNewUser(userRegister);
        if (newUser) {
            console.log('create success');
            const user = await userRepo.findUserByEmail(userRegister.email);
            user.activeCode = await functionUtils.sendOTPtoMail(
                userRegister.email
            );
            await user.save();
            console.log(user);
            return true;
        } else {
            return false;
        }
    } 
};

const createUser = async (userInfo) => {
    console.log(userInfo);
    if(!(await userRep.checkUser(userInfo.username))){
        //console.log("a")
        userInfo.activeCode = await functionUtils.sendOTPtoMail(userInfo.email)
      //  console.log("ab")
        const user = await userRep.CreateNewUser(userInfo);
        return user;
    }
};

const changePassword = async (email, password, newPassword) => {
    const user = await userRep.findUserByEmail(email);
    if(user.password === password){
        user.password = newPassword;
        await user.save();
        return user;
    } else {
        throw new Error('400', 'wrong password');
    }
};

const UpdateInfoUser = async (newInFor) => {
    const user = await userRep.findUserByEmail(newInFor.email);
    if(user.email === newInFor.email){
        user.fullname = newInFor.fullname;
        user.dob = newInFor.dob;
        await user.save();
        return user;
    } else {
        throw new Error('400', 'wrong password');
    }
};


module.exports = {activateUser, createUser, changePassword, UpdateInfoUser}
