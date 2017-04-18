var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongoConnection = require('../modules/mongo-connection');



var json2csv = require('json2csv');
var fs = require('fs');

// var sampleObjects = [{firstName: One}, {lastNames: Two}, {email: Three}];
// var sampleObject = {firstName: 'One', lastNames: 'Two'};
// var sampleObject = ['One', 'Two', 'Three'];

var propertyKeys = ['firstName', 'lastName', 'email'];
var arrayOfObjects = [
	{
		//"_id" : ObjectId("58ebb0162bb27f227c4fc357"),
		"firstName" : "Phil",
		"lastName" : "Curtis",
		"email" : "philcurtisengineering@gmail.com"
	},
	{
		//"_id" : ObjectId("58ebb0562bb27f227c4fc358"),
		"firstName" : "Thomas",
		"lastName" : "Johander",
		"email" : "tjohander@gmail.com"
	},
	{
		//"_id" : ObjectId("58ebb0dc2bb27f227c4fc359"),
		"firstName" : "Ed",
		"lastName" : "Wippler",
		"email" : "ed.wippler@gmail.com"
	},
	{
		//"_id" : ObjectId("58ebb0dc2bb27f227c4fc35a"),
		"firstName" : "Paul",
		"lastName" : "Dunkirk",
		"email" : "pauldunkirk@gmail.com"
	}
];





router.post('/export', function(req,res){
  console.log('summary.route.js route hit');
  console.log('req.body is: ', req.body);
    var csv = json2csv({ data: arrayOfObjects, fields: propertyKeys });
    fs.writeFile('file.csv', csv, function(err) {
    if(err){
      console.log('error on json2csv POST: ',err);
      res.sendStatus(500);
    } else {
      console.log('successful json2csv POST: ',csv);
      res.send(csv)
    }//end else
  })//end newClient.save
});//end router.post



module.exports = router;