var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// Throws and error because both 0 and 1 values are in the same object.  Only works if 0 is for "_id" field.
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}, {projection: {name: 1, address: 0}}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});