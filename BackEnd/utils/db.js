const mongoose = require('mongoose')
const URI = process.env.MONGO_URI
const connectToDb = async() => {
    try {
        await mongoose.connect(URI)
        console.log(" Data Base connected");
        
    } catch (error) {
        console.log(error);
        process.exit(1) 
    }
}

module.exports=connectToDb;