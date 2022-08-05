require('dotenv').config({ path: './src/configs/.env' });
const jwt = require('jsonwebtoken');

const checkLogin = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
   // console.log(process.env.ACCESS_TOKEN_SECRET)
    if (token) {
        try {
            jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
            const payload = jwt.decode(token);
            req.body.email = payload.email;
            next();
        } catch (err) {
            console.log(err);
            next(new Error('500', 'User is not login'));
        }
    } else {
        next(new Error('500', 'User is not login'));
    }
};

module.exports = { checkLogin };
