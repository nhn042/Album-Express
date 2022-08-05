const nodemailer = require('nodemailer');
require('dotenv').config({ path: '../configs/.env' });
const crypto = require('crypto');

const sendOTPtoMail = async (email) => {
    await nodemailer.createTestAccount();
    const otp = Math.floor(1000 + Math.random() * 9000);
    const smtpConfig = {
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: process.env.GMAIL,
            pass: process.env.PASSWORD,
        },
    };
    const transporter = nodemailer.createTransport(smtpConfig);

    await transporter.sendMail({
        from: '"nghia"<huunghia1806@gmail.com>',
        to: email,
        subject: 'Verify Your Account',
        html: `<p>Enter <b>${otp}</b> to verify your email address</p>`,
    });
    return otp;
};

const hashPassword = (password) => {
    return crypto.createHash('sha256').update(password).digest('base64');
};


module.exports = { sendOTPtoMail, hashPassword };
