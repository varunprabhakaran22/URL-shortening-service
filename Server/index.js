// importing all the required packages
const express = require('express');
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const cors=require('cors');
const connectDB = require('../Server/config/db')

const port = process.env.PORT || 8000;
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({encoded:false}))
app.use(cors());

//@ connecting to db
connectDB()



//importing the files
const urlShortenning = require('../Server/routes/urlShortening')

//Redirecting to routes
app.use('/api/url', urlShortenning)

// Server can be accessed from port 8000
app.listen(port, () => {
    console.log('Server is ready');
})
