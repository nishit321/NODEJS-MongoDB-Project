const {ObjectID} = require('mongodb');
const {Mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Mongoose Synatx
Todo.remove({}).then((result)=>{
    console.log(result);
})

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5b1536de8d52e4b824308544').then((todo)=>{
    console.log(todo);
});

