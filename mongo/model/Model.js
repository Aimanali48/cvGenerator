const mongoose = require('mongoose')
const schema = mongoose.Schema({
    name :  {
        type : String,
        required : true
    },
    designation :  {
        type : String,
        required : true
    },

    summary :  {
        type : String,
        required : true
    },

    college :  {
        type : String,
        required : true
    },

    duration :  {
        type : String,
        required : true
    },

    dept :  {
        type : String,
        required : true
    },

    address :  {
        type : String,
        required : true
    },

    email :  {
        type : String,
        required : true
    },

    phone :  {
        type : String,
        required : true
    },

    skills:  {
        type : String,
        required : true
    },

    workexp :  {
        type : String,
        required : true
    },

    projects :  {
        type : String,
        required : true
    }

})

module.exports = mongoose.model('User', schema)