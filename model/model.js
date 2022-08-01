const mongoose = require('mongoose')
const schema = mongoose.Schema;
const bcrypt = require('bcrypt')

//Login Schema
const loginSchema = new schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: [true, "Email already in use"],
        lowercase: true,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true

    }
});

// Question Schema
const bookSchema = new schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        reuqire: true
    },
    isbn:{
        type: Number,
        require: true
    }
    
});


//Admin Schema
const adminSchema = new schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: [true, "Email already in use"],
        lowercase: true,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
}
});

const queriesSchema = new schema({
    queries:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});

// Static function

// User login 
loginSchema.statics.login = async function(email, password){
    const user = await this.findOne({ email });
    if(user){
        const auth = await bcrypt.compareSync(password,user.password);
        if(auth){
            return user
        }
    }
}

//Admin login
adminSchema.statics.login = async function(email, password){
    const user = await this.findOne({ email });
    if(user){
        const auth = await bcrypt.compareSync(password,user.password);
        if(auth){
            return user
        }
    }
}


//Models

const loginModel = mongoose.model("logins",loginSchema);


const adminModel = mongoose.model("admins",adminSchema);

const bookModel = mongoose.model("books",bookSchema);

//Module Exports

module.exports = { loginModel , bookModel , adminModel };