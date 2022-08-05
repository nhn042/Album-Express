
const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    
    username: {
        type: String,
        minLength: 1,
        maxLength: 30
    },
    password: {
        type: String
    },
    email: {
        type: String,
    },
    fullname: {
        type: String,
    },
    dob: {
        type: Date,
    },
    createdAt: {
        type: Date,
        timestamps: true,
        imutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        timestamps: true,
        default: () => Date.now(),
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    activeCode: {
        type: Number || String,
        default: null,
    },

});

const userModel = mongoose.model('user', userSchema);

module.exports = { userModel }