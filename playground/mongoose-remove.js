const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
// Todo.findOneAndRemove

//Todo.findOneAndRemove
//Todo.FindByIdAndRemove

Todo.findOneAndRemove({_id: '59bc4baa9ecad9d52425e182'}).then((todo) => {

});

Todo.findByIdAndRemove('59bc4baa9ecad9d52425e182').then((todo) => {
  console.log(todo);
});
