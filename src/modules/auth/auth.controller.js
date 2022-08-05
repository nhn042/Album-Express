const authService = require('./auth.service');
const crypto = require("crypto");

const login = async (req, res) => {
    const {username, password} = req.body;
    try{
        const accessToken = await authService.checkLogin(username, password);
        res.status(200).json(accessToken);
    }catch(err) {
        res.status(400).json("fail")
    }
}
const register = async (req, res) => {
    //const hashPassword = crypto.createHash('sha256').update(password).digest('base64');
    if(await authService.register(req.body)){
        return res.status(200).json("Successfull")
    } else {
        res.status(401).json("Fail");
    }

}

module.exports = {
    login,
    register
}