const {Mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b1536de8d52e4b824308544';

Todo.find({
    _id:id
}).then((todos)=>{
    console.log('Todos',todos);
});

Todo.findOne({
    _id:id
}).then((todos)=>{
    console.log('Todo',todos);
});

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('Id Not Found');        
    }
    console.log('Todo By ID',todo);
}).catch((e)=>console.log(e));