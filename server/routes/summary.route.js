var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongoConnection = require('../modules/mongo-connection');
var Client = require('../models/clientMasterSchema');
// var json2csv = require('json2csv');
var csv = require('express-csv');
var fs = require('fs');

router.post('/getcsv', function(req, res){
	// var clientId = require('mongodb').ObjectId(req.query.id);
	var clientId = req.body.details._id;
	console.log('summary.route.js / router.post / req.query.id: ', req.body); 
	Client.findOne({_id: clientId},function (err, result) {
		console.log('summary.route.js / router.post / clientId: ', clientId); // = 
		// result.test = "phil-test!";
		if (err) {
			console.log('error on db lookup POST: ', err);
			res.status(500).send(err);
		} else {
			var obj = result.toObject();
			obj.test = "hello";
			console.log('object? ', obj);
			var data = [obj]; // CSV-create an array from the mongo object so we can use .unshift() later
			var headers = Object.keys(obj); // CSV-create a header row from the object's keys/properties
			data.unshift(headers); 	// CSV-push keys array to the beginning of data array
			console.log('final data: ', data);
			res.csv(data); 
		}
	});
		});

module.exports = router;