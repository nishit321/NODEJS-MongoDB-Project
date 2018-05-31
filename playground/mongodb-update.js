const {MongoClient,ObjectID} = require('mongodb');

 // TodoApp is database name
 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect mongodb');
    }
    console.log('Connected to MongoDB server');
    /*db.collection('Todos').findOneAndUpdate({
        _id:new ObjectID('5b0ba14b4d4c451f3844ba53')
    },{
        $set:{
            completed:true
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });*/
    db.collection('users').findOneAndUpdate({
        _id: new ObjectID('5b0ba3d4cc42be106cee9abe')
    },{
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    },(err,res)=>{
        console.log(res);
    });
    db.close();
});
