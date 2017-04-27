 // declaration of the User schema used to correlate a Firebaseuser.email to a user in our users collection

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: { type: String, require: true, unique: true }
});

var User = mongoose.model('User', userSchema); // Green 'User' refers to the users collection adding plurality and not case sensitive.


module.exports = User;
