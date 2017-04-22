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
  var data = [clientId]; // CSV-create an array from the mongo object so we can use .unshift() later
  var headers = Object.keys(clientId); // CSV-create a header row from the object's keys/properties
	Client.find({_id: clientId}, function (err, client) {
		if (err) {
			console.log('error on db lookup POST: ',err);
			res.status(500).send(err);
			} else {
				console.log('summary.route.js / router.post / else / client: ', client);
				data.unshift(headers); 	// CSV-push keys array to the beginning of data array
				console.log('data: ', data);
				res.csv(data); //CSV
			}
			});
		});

module.exports = router;

