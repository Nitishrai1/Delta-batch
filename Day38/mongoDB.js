// The shell :
// Mongo db works on javascript code extensively
// to start the mongo shell we use mongosh
// to create & use a new database called college
// show dbs: it is used to see the already existing database of the mongodb 

// In mongodb the data is stored in the format of BSON binery json because json is string type data whereas BSON is binery type data and hence it is more fast and less space consuming

// Document:Mongo stores data in form of documents (BSON docs)
// collection:Mongo stores documents in collections
// inserting data inside a database

// FIND in DB :it is used to fing the data inside a database db.collection.find() returns everything
// for specific queries db.collection.find({key:value})
// db.collection.findOne({key:value})
// Q Find students where marks>75
// db.student.find({marks:{$gt:75}})

// Q find students who live in delhi or mumbai
// debugger.student.find({city:{$in:["Delhi","Mumbai"]}})

// Q find students who scored>75 or live in delhi
// db.student.find({$or:[{marks:{$gt:75}},{city:"Delhi"}]})

// Update in DB
// db.collection.updateOne() updates at most a single documents that match a specified filter even though multile documents may match the specified 

// db.collection.updateOne(<filter>,<update>,<options>)
// db.student.updateOne({name:"adam"},{$set:{marks:99}})
// UPDATE in DB
// $addFields
// $set: it is used to set the new value of an existing key db.student.updateOne({name:"adam"},{$set:{marks:99}})
// $project
// $sunset
// $unset
// $replaceRoot
// $replaceWith

// db.collection.updateMany() update all documents that match a specified filter
// db.collection.replaceOne() replaces at most a single document that match a specified filter even though multiple documents may match the specified filter

// db.updateMany({name:"nitish"},{$set:{name:"Nitish rai"}})
// db.collection.replaceOne({name:"bob"},(name:"nitish",marks:94))

// Nesting
// {
//     _id:ObjectId("73334h3b 3y43 3 734t334t3434tb73t7"),
//     name:'farah',
//     performance:{marks:88,grade:'A'}
// }
// db.student.insertOne({name:"farah",performance:{marks:88,grade:"A"}}) 
//  db.student.find({"performance.marks":88}) 

// DELETE IN DB 
// db.collection.deleteOne(<filter>,<options>) this will delete the first occurence
// db.collection.deleteMany(<filter>,<options>) this will delete the all the occurence
// db.collection.deleteOne({stare:"haryana"})
// db.collection.deleteMany({marks:{$lt:75}})

// To delete the entire database we use drop command
// db.dropDatabase()
// db.student.deleteMany({})   this will delete all the value of the db
// db.droptDatabase()  //this will delet the db

