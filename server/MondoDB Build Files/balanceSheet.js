function balanceSheetDbConnection() {

var connectionString = require('../database-config');
var MongoClient = require('mongodb').MongoClient;
function addObject (collection, object) {
  collection.insert(object, function(err, result) {
    if (!err) {
      console.log('Inserted: ');
      console.log(result);
    }
  });
}
// MongoClient.connect('mongodb://localhost:27017/fhat')
MongoClient.connect(connectionString, function(err, db) {
  var myDB = db.db('fhat');
  myDB.dropCollection('tester');
  myDB.createCollection('tester', function (err, tester) {
    addObject(tester, {FirstName: 'first001', lastName: 'last001', email: 'ac@gmail.com'});
    addObject(tester, {FirstName: 'first002', lastName: 'last002', email: 'bc@gmail.com'});
    addObject(tester, {FirstName: 'first003', lastName: 'last003', email: 'pc@gmail.com'});
  });
setTimeout (function() { db.close(); }, 6000);
});
}

console.log(new Date().getFullYear() + ' balanceSheet.js is run');


self.balanceSheet = function() {
  console.log('balanceSheet button clicked');
  // balanceSheetDbConnection()
  var connectionString = require('../modules/database-config.js');
  var MongoClient = require('mongodb').MongoClient;
  function addObject (collection, object) {
  collection.insert(object, function(err, result) {
    if (!err) {
      console.log('Inserted: ');
      console.log(result);
    }
  });
}
// MongoClient.connect('mongodb://localhost:27017/fhat')
MongoClient.connect(connectionString, function(err, db) {
  var myDB = db.db('fhat');
  myDB.dropCollection('tester');
  myDB.createCollection('tester', function (err, tester) {
    addObject(tester, {FirstName: 'first001', lastName: 'last001', email: 'ac@gmail.com'});
    addObject(tester, {FirstName: 'first002', lastName: 'last002', email: 'bc@gmail.com'});
    addObject(tester, {FirstName: 'first003', lastName: 'last003', email: 'pc@gmail.com'});
  });
setTimeout (function() { db.close(); }, 6000);
});
}
// console.log(new Date().getFullYear() + ' balanceSheet.js is run');