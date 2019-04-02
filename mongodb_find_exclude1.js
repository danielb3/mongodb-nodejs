var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// exclude "address" from result:
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}, {projection: {address: 0}}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});