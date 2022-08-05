const userService = require('./user.service');


const activateUser = async (req, res) => {
    const {email, otp} = req.body;
    console.log("body", req.body);
    try{
        if(await userService.activateUser(email, otp)){
            res.status(200).json({
                email: email,
                otp: otp,
            });
        } else {
            res.status(400).send('fail')
        }

    } catch(err) {
        throw err;
    }
};

const createUser = async (req, res) => {
    console.log("body",req.body);
    // {username: , password: }
    const user = await userService.createUser(req.body);
    res.status(200).json({user});
};

const changePassword = async (req, res) => {
    const {email, password, newPassword} = req.body;
    const newPass = await userService.changePassword(email, password, newPassword);
    try{
        if(newPass) {
            res.status(200).json("chang pass success")
        } else {
            res.status(400).json("fail")
        }
    } catch(err) {
    }
};

const UpdateInfoUser = async (req, res) => {
    const newUser = await userService.UpdateInfoUser(req.body);
    try{
        if(newUser) {
            res.status(200).json("chang user success")
        } else {
            res.status(400).json("fail")
        }
    } catch(err) {
    }
};


module.exports = {
    activateUser, createUser, changePassword, UpdateInfoUser
}