var MongoClient =required ('mongodb').MongoClient;
var url="mongodb://localhost:27017/mydata";
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    console.log("Database created!");
    db.close();
});