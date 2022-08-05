const Joi = require('joi');
const validateActivateUser = async (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string()
            .trim()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'vn'] } })
            .required(),
        otp: Joi.number().min(4).required(),
    });
    const { email, otp } = req.body;
    try {
        await schema.validateAsync({ email, otp });
        next();
    } catch (e) {
        next(new Error('400', e.details[0].message));
    }
};

const createUser = async (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string
            .trim()
            .min(1)
            .max(30),
        password: Joi.string()
            .trim()
            .min(5)
            .required(),
        fullname: Joi.string()
            .trim()
            .min(1)
            .max(30),
        email: Joi.string()
            .trim()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'vn'] } })
            .required(),
        otp: Joi.number().min(4).required(),
    });
    const { email, otp } = req.body;
    try {
        await schema.validateAsync({ email, otp });
        next();
    } catch (e) {
        next(new Error('400', e.details[0].message));
    }
}

const validateChangePassword = async (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string()
            .trim()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'vn'] } })
            .required(),
        password: Joi.string()
            .trim()
            .min(5)
            .required(),
        newPassword: Joi.string()
            .trim()
            .min(5)
            .required(),
    });
    const { email, password, newPassword } = req.body;
    try {
        await schema.validateAsync({ email, password, newPassword });
        next();
    } catch (e) {
        next(new Error('400', e.details[0].message));
    }
};

const validateUpdateUser = async (req, res, next) => {
    const schema = Joi.object({
        dob: Joi.date(),
        fullname: Joi.string()
            .trim()
            .min(1)
            .max(30),
    });
    const { dob, fullname } = req.body;
    try {
        await schema.validateAsync({ dob, fullname });
        next();
    } catch (e) {
        next(new Error('400', e.details[0].message));
    }
};

module.exports = {
    validateActivateUser,
    validateChangePassword,
    validateUpdateUser,
    createUser,
};
