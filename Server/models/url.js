const mongoose = require('mongoose')

const urlSchema  = new mongoose.Schema({
    urlCode :{
        type:String
    },

    shortUrl :{
        type:String
    },

    longUrl :{
        type:String
    },

    date:{
        default:Date.now,
        type:String
    }
})

module.exports = mongoose.model("url",urlSchema)