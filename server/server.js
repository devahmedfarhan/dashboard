const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const authRoutes = require('./routes/authRoutes');
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = 5000;
const MONGO_URL = 'mongodb+srv://auth_log:auth_log_123@cluster0.uyc0slz.mongodb.net/tempp'

mongoose.connect(MONGO_URL).then(() => {
    console.log('DB connection established');
    app.listen(PORT, () => {
        console.log('listening on port 5000');
    })
}).catch((error) => console.log(error));