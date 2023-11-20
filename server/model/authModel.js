const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const AuthModel = mongoose.model('users', userModel);
module.exports = AuthModel;