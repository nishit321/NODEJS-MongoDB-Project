const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');     
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');


var app = express();
const port = process.env.PORT || 3000;

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

app.get('/todos/:id',(req,res)=>{
        var id = req.params.id;
        if(!ObjectID.isValid(id)){
            return res.status(400).send();
        }
        Todo.findById(id).then((todo)=>{
            if(!Todo){
                return res.status(404).send();
            }
            res.send({todo});
        }).catch((e)=>{
            res.status(400).send();
        });
   
});


app.delete('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(400).send();
    }
    Todo.findByIdAndRemove(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        } 
        res.send(todo);
    }).catch((e)=>{
        res.status(400).send();
    });
});

app.patch('/todos/:id',(req,res)=>{
    var id = req.params.id;
    var body = _.pick(req.body,['text']);
    if(!ObjectID.isValid(id)){
        return res.status(400).send();
    }    
    Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
    });
});
app.listen(port,()=>{
    console.log(`Starting on port ${port}`);
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