const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/AlienDBex'
const app = express();

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log("Connected to db");
});

app.use(express.json())

const alienrouter = require('./routes/aliens');
app.use('/aliens', alienrouter); //for all aliens req, forward to aliens.js

app.listen(9000, () => {
    console.log("Server started");
});
