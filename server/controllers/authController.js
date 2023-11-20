const AuthModel = require('../model/authModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new AuthModel({
            username,
            password: hashedPassword
        });
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const usernameCheck = await AuthModel.findOne({ username });

        if (!usernameCheck) {
            return res.status(401).json({ message: 'Username not found' });
        }

        const passwordCheck = await bcrypt.compare(password, usernameCheck.password);
        if (!passwordCheck) {
            return res.status(401).json({ message: 'Password incorrect' });
        }
        const token = jwt.sign({ username: usernameCheck.username }, 'tdyhdrtgfd', {
            expiresIn: '1hr'
        });
        res.status(200).json({
            data: usernameCheck,
            token: token,
            message: 'Token Registered'
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};