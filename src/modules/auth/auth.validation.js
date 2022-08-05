const Joi = require('joi');
const validateLogin = async (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string
            .trim()
            .min(1)
            .max(30),
        password: Joi.string()
            .trim()
            .min(5)
            .required(),
    });
    const { username, password } = req.body;
    try {
        await schema.validateAsync({ username, password  });
        next();
    } catch (e) {
        next(new Error('400', e.details[0].message));
    }
};

const validateRegister = async (req, res, next) => {
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
        dob: Joi.date()
    });
    const { username, password, fullname, email, dob } = req.body;
    try {
        await schema.validateAsync({ username, password, fullname, email, dob });
        next();
    } catch (e) {
        next(new Error('400', e.details[0].message));
    }
};

module.exports = {
    validateLogin,
    validateRegister
};
