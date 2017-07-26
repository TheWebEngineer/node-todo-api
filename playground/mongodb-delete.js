// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text : "Go to sleep"}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: "Go to sleep"}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.close();

  //Challenge pt. 1: deleteMany
  db.collection('Users').deleteMany({name: "Matt Silverman"}).then((result) => {
    console.log(result);
  });

  //Challenge pt. 2: deleteOne
  db.collection('Users').deleteOne({_id: new ObjectID("595da61529ae9f25246e924a")}).then((result) => {
    console.log(result);
  })
});
