const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    Username:{
        type: String
        
    },
      
    email:{
        type: String,
        
        unique:true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password:{
        type: String,
        
    },
    confirm_password:{
        type: String
        
    },
    token:{
        type : String
    }
});

module.exports = mongoose.model('user', userSchema);
