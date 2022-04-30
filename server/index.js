require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const PORT = process.env.PORT || 5000;
const app = express();

app.use(fileUpload({}))
app.use(cors())
app.use(express.json())
app.use(express.static('static'))
app.use('/api', router)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(PORT, () => console.log(`Server started on ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
