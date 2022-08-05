const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    albumName: {
        type: String,
        require: true,
    },
    createAt: {
        type: Date,
        timestamps: true,
        imutable: true,
        default: () => Date.now(),
        required: true,
    },
    updateAt: {
        type: Date,
        timestamps: true,
        imutable: true,
        default: () => Date.now(),
        required: true,
    },
    description: {
        type: String,
    },
});

module.exports = mongoose.model('album', albumSchema);