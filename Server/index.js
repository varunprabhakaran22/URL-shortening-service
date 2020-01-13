// importing all the required packages
const express = require('express');
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const cors=require('cors');
const port = process.env.PORT || 8000;

const app = express();
app.use(bodyparser.urlencoded({encoded:false}))
app.use(bodyparser.json());
app.use(cors());


const urlShortenning = require('../Server/routes/urlShortening')

app.use('/api/url', urlShortenning)

// Server can be accessed from port 8000
app.listen(port, () => {
    console.log('Server is ready');
})
 