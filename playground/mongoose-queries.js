const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59a708790dd5818c292aeffd';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID is not valid!');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found!');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

const userID = "5981508897fe6ad418c673d8";

User.findById(userID).then((user) => {
  if (!user) {
    return console.log("User not found!");
  }
  console.log(`User: ${user}`);
}).catch((e) => console.log(e));
