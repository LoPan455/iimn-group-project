var mongoose = require('mongoose');
var connectionString = require('./database-config');
var connectToMongoDatabase = function(){
  mongoose.connect(connectionString);
  mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to: ', connectionString);
  });
  mongoose.connection.on('error', function(err) {
    console.log('Mongoose failed connection: ', err);
  });
}
module.exports = { connect: connectToMongoDatabase };
// exporting an object with an attritube called connect
