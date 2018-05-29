const mongoClient = require('mongodb').MongoClient;

 // TodoApp is database name
mongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect mongodb');
    }
    console.log('Connected to MongoDB server');
    
    //deleteMany
   /* db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
        console.log(result);
    });*/         
    
    //deleteOne
    /*db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
        console.log(result);
    });*/
    
    //findOneandDelete
    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    });
    db.close();
});
