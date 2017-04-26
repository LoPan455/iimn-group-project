var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongoConnection = require('../modules/mongo-connection');
var Client = require('../models/clientMasterSchema');
// var json2csv = require('json2csv');
var csv = require('express-csv');
var fs = require('fs');

router.post('/getcsv', function(req, res){
	var clientId = require('mongodb').ObjectId(req.query.id);
	// console.log('summary.route.js / router.post / req.query.id: ', req.query.id); // = undefined
	// console.log('summary.route.js / router.post / req.query: ', req.query); // = empty object {}
	console.log('summary.route.js / router.post / mongodb-ObjectId(req.query.id): ', require('mongodb').ObjectId(req.query.id)); // = empty object {}
	// console.log('summary.route.js / router.post / req: ', req); // = Big object with no db data
	// console.log('summary.route.js / router.post / clientId: ', clientId); // = an id (58fbbba9863c3a1c5e7b716d) not in db!!
  var data = [clientId]; // CSV-create an array from the mongo object so we can use .unshift() later
  var headers = Object.keys(clientId); // CSV-create a header row from the object's keys/properties
	Client.find({_id: clientId}, function (err, client) {

	// console.log('summary.route.js / router.post / res: ', res); // = 
	console.log('summary.route.js / router.post / res.query: ', res.query); // = 
	// console.log('summary.route.js / router.post / res.data: ', res.data); // = undefined
	console.log('summary.route.js / router.post / clientId: ', clientId); // = an id (58fbbba9863c3a1c5e7b716d) not in db!!
	console.log('summary.route.js / router.post / client: ', client); // = empty array brackets []

		if (err) {
			console.log('error on db lookup POST: ',err);
			res.status(500).send(err);
		} else {
			
				console.log('summary.route.js / router.post / else / data: ', data); // the var data which is same as clientId above within [ ]
				data.unshift(headers); 	// CSV-push keys array to the beginning of data array
				// console.log('data: ', data);
				res.csv(data); //CSV
			}
			});
		});

module.exports = router;

