// define and execute the application's connection to the MongoDb


var mongoose = require('mongoose');
var connectionString = require('./database-config');

// Establishes connection to the mongo database

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
