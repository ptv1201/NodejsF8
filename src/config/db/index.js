const mongoose = require('mongoose')
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;

async function connect(){
try {
     await mongoose.connect(mongoURI)
     console.log('connect successfully')
} catch (error) {
    console.log('connect faile')
}
}
module.exports= { connect }
