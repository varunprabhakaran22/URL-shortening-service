const mongoose = require('mongoose');

//Mongoose model for url 
const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: { type: String, default: Date.now }
});

module.exports = mongoose.model('Url', urlSchema);