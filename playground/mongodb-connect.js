const mongoClient = require('mongodb').MongoClient;

// TodoApp is database name
mongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect mongodb');
    }
    console.log('Connected to MongoDB server');
   /* db.collection('Todos').insertOne({
        text:'Something to do',
        completed:false
    }, (err,result)=>{
        if(err){
            return console.log('Unable to insert todo',err);
        }   
        // ops is to store all values which is inserted above.
        console.log(JSON.stringify(result.ops,undefined,2));
    });*/
    db.collection('users').insertOne({
        name:'Nishit Shah',
        age:30,
        location:'sabamati ahmedabad'
    },(err,res)=>{
        if(err){
            return console.log('Unable to insert todo',err);
        }
        console.log(JSON.stringify(res.ops,undefined,2));
    });
    db.close();
});

