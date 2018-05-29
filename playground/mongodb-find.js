const mongoClient = require('mongodb').MongoClient;

// TodoApp is database name
mongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect mongodb');
    }
    console.log('Connected to MongoDB server');
    // find() return monogodb cursor
    db.collection('Todos').find({completed:false}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('Unable to fetch');
    });
    db.collection('Todos').find({completed:false}).count().then((count)=>{
        console.log('Todos Count: ',count);
    },(err)=>{
        console.log(err);
    });
    db.close();
});

