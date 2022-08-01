const mongoose = require('mongoose')

const URI = "mongodb+srv://admin:lostphoenix@noone.wc7f1.mongodb.net/PersonalBookDir?retryWrites=true&w=majority"

const connect = async () => {
    try{
        await mongoose.connect(URI,{useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Connected DB");
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connect;