var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: { type: String, require: true, unique: true },
  clearanceLevel: { type: Number, required: true, default: 0, max: 5 }
});

var User = mongoose.model('User', userSchema);
// creates a model based on Schema
// model and schema are related but not the same
// Schema is the rule of what the document will look like
// model is the object the <blank> uses to call methods and functions (unsure=11:50)
// Taking a object of a model and applying a schema to it
// Schema enforces the properties


module.exports = User;