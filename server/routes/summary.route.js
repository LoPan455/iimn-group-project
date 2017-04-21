var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongoConnection = require('../modules/mongo-connection');
var Client = require('../models/clientMasterSchema');
var json2csv = require('json2csv');
var csv = require('express-csv');
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
// var propertyKeys = ['firstName', 'lastName', 'email'];
// var client = json2csv({data: arrayOfObjects, fields: propertyKeys }); // Hardcoding works

// *NOTE: This still hard-coded from clientfactory / var currentClientId*
// router.post('/export/', function(req,res){ // don't need /:id because getting entire object?
router.post('/getcsv', function(req, res){
  var mongoObject = {
    _id: '1234',
    firstName: 'First',
    lastName: 'Last'
  };
	// create an array from the mongo object so we can use .unshift() later
  var data = [mongoObject];
	// create a header row from the object's keys/properties
  var headers = Object.keys(mongoObject);
	// push keys array to the beginning of data array
  data.unshift(headers);
  console.log('data: ', data);
  res.attachment('testing.csv');   // not really used
  res.csv(data);
})











// 	var clientId = require('mongodb').ObjectId(req.query.id);  // outputs Client Id # // (req.query.firstName);  // also outputs client Id #

//   		Client.find(
//           {_id: clientId},
// 					function (err, client) {

//             if (err) {
//                 console.log('error on db lookup POST: ',err);
//                 res.status(500).send(err)

//             } else {
// 							console.log('summary.route.js / router.post / else / client: ', client);
// 							// res.attachment().csv(client);
// 							// res.csv(client);
// 							//res.setHeader('Content-disposition', 'attachment; filename=dramaticpenguin.MOV');
// 							// var clientCsv = 
// 							// var input = JSON.stringify(client);
// 							// var input = toObject(client);
// 							// console.log('summary.route.js / router.post / else / json input: ', input);

// 							json2csv({data: client}, function(err, csv) {
// 								console.log('json2csv is run');
// 								if(err)	{
// 									console.log('json2csv error: ', err);
// 									res.send(client._id); // saves to server
// 								} else {
// 									console.log('json2csv output: ', csv);
// 									fs.writeFile('client-export-file.csv', csv, function(err) {  // clientId			
											
// 										//res.send(client); // saves to server
// 										res.attachment('client-export-file.csv');
// 										console.log('summary.route.js / router.post / clientId / json2csv-fs.writeFile success / clientId = ', clientId);
	
// 									});
// 								}
									
// 							});
						
// 	    } //end else
//   }); //end newClient.save
// }); //end router.post




// fs.writeFile('client-export-file.csv', clientId, function(err) {
// var csv = json2csv({data: arrayOfObjects, fields: propertyKeys });
//  //   res.send(csv) // saves to server
//       res.attachment('client-export-file.csv')
// 			fs.unlink('client-export-file.csv')


module.exports = router;

