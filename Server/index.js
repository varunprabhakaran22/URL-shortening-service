//Importing the packages  
const express = require('express');
const connectDB = require('./config/db');
const cors=require('cors');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

// Connect to database
connectDB();

app.use(express.json());



// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/auth', require('./routes/login'));
app.use('/api/url', require('./routes/url')); 



app.listen(port, () => {
  console.log('Server is ready');
});