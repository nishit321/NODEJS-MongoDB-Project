
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// connect to database using mangoose library.
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};