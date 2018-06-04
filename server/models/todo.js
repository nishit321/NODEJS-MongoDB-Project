var mongoose = require('mongoose');
// Basic instruction of mongoose
// 1. Convert collection name into lower-case and then create.
// Model creation and define structure.
var Todo = mongoose.model('todos',{
    text:{
        type:String,
        required: true,
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean
    },
    completed_at:{
        type:Number
    } 
});
module.exports={Todo};