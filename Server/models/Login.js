const mongoose = require('mongoose');

//Mongoose model for user login details
const loginSchema = new mongoose.Schema({
  email: {
    type:String,
    required:true
    },

    password : {
      type:String,
      required:true
    }
});

module.exports = mongoose.model('login', loginSchema);