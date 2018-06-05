var express = require('express');
var bodyParser = require('body-parser');
     
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');


var app = express();

//midleware
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);       
    });
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.send(e);
    });
});

app.listen(3000,()=>{
    console.log('Starting on port 3000');
});

// Basic instruction of mongoose
// 1. Convert collection name into lower-case and then create.
// Model creation and define structure.
/*var Todo = mongoose.model('todos',{
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
 
var newTodo = new Todo({
    text:'Nishit Shah',
    completed:true
});

newTodo.save().then((doc)=>{
    console.log('Saved Todo',doc);
},(e)=>{
    console.log('Unable to save',e);
});

*/