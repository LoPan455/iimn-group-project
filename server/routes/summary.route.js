var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongoConnection = require('../modules/mongo-connection');
var Client = require('../models/clientMasterSchema');
var json2csv = require('json2csv');
var fs = require('fs');

var arrayOfObjects = [
	{
		"firstName" : "01a",
		"lastName" : "01b",
		"email" : "01c"
	},
	{
		"firstName" : "02a",
		"lastName" : "02b",
		"email" : "02c"
	},
	{
		"firstName" : "03a",
		"lastName" : "03b",
		"email" : "03c"
	},
	{
		"firstName" : "04a",
		"lastName" : "04b",
		"email" : "04c"
	}
];
var propertyKeys = ['firstName', 'lastName', 'email'];
var client = json2csv({data: arrayOfObjects, fields: propertyKeys }); // Hardcoding works

// *NOTE: This still hard-coded from clientfactory / var currentClientId*
router.post('/export/', function(req,res){ // don't need /:id because getting entire object?
	var clientId = require('mongodb').ObjectId(req.query.id);  // this is with currentClientId
	console.log('summary.route.js / router.post / clientId = ', clientId)
  		Client.find(
          {_id: clientId},
					function (err, client) {
            if (err) {
                console.log('error on db lookup POST: ',err);
                res.status(500).send(err)
            } else {
						fs.writeFile('client-export-file.csv', client, function(err) {  // clientId
					  res.send(client); // saves to server
            console.log('summary.route.js / router.post / clientId / json2csv-fs.writeFile success / client: ', client.id);
					});	
	    } //end else
  }); //end newClient.save
}); //end router.post




// fs.writeFile('client-export-file.csv', clientId, function(err) {
// var csv = json2csv({data: arrayOfObjects, fields: propertyKeys });
//  //   res.send(csv) // saves to server
//       res.attachment('client-export-file.csv')
// 			fs.unlink('client-export-file.csv')


module.exports = router;

