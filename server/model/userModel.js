const mongoose = require('mongoose');

const UserModelData = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
});

const UserModel = mongoose.model('userdata', UserModelData);
module.exports = UserModel;