var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongoConnection = require('../modules/mongo-connection');
// var json2csv = require('json2csv');

// var sampleObjects = [{firstName: One}, {lastNames: Two}, {email: Three}];
// var sampleObject = {firstName: 'One', lastNames: 'Two'};
// var sampleObject = ['One', 'Two', 'Three'];


var json2csv = require('json2csv');
var fs = require('fs');
var fields = ['car', 'price', 'color'];
var myCars = [
  {
    "car": "Audi",
    "price": 40000,
    "color": "blue"
  }, {
    "car": "BMW",
    "price": 35000,
    "color": "black"
  }, {
    "car": "Porsche",
    "price": 60000,
    "color": "green"
  }
];
var csv = json2csv({ data: myCars, fields: fields });
 
fs.writeFile('file.csv', csv, function(err) {
  if (err) throw err;
  console.log('file saved');
});






module.exports = router;