var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: { type: String, require: true, unique: true }
});

var User = mongoose.model('User', userSchema); // Green 'User' refers to the users collection adding plurality and not case sensitive.


module.exports = User;