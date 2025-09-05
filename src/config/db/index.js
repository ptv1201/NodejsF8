const mongoose = require('mongoose')

async function connect(){
try {
     await mongoose.connect('mongodb+srv://ptv1201:hpvbo1201@nodejsf8.r9cyai2.mongodb.net/?retryWrites=true&w=majority&appName=NodejsF8')
     console.log('connect successfully')
} catch (error) {
    console.log('connect faile')
}
}
module.exports= { connect }
