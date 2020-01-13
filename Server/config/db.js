const mongoose = require('mongoose')
const config = require('config')
const dbUrl = config.get("mongoURL")


const connectDB = async () =>{
    try {
        await mongoose.connect(dbUrl , {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Mongodb connected ....");

    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB