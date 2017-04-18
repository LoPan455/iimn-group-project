console.log('csv file run');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongoConnection = require('../modules/mongo-connection');

var CsvBuilder = require('csv-builder');
exportCsv()

// Create csv formated streams from Arrays of Objects
// var sampleObjects = [{One}, {Two}, {Three}];
// var sampleObjects = [{One, Two, Three}];
// var sampleObjects = [{'One', 'Two', 'Three'}];
var sampleObjects = [{firstName: One}, {lastNames: Two}, {email: Three}];
// {
//     //"_id" : ObjectId("58ebb0162bb27f227c4fc357"),
//     "firstName" : "Phil",
//     "lastName" : "Curtis",
//     "email" : "philcurtisengineering@gmail.com"
// },
// {
//     //"_id" : ObjectId("58ebb0562bb27f227c4fc358"),
//     "firstName" : "Thomas",
//     "lastName" : "Johander",
//     "email" : "tjohander@gmail.com"
// },
// {
//     //"_id" : ObjectId("58ebb0dc2bb27f227c4fc359"),
//     "firstName" : "Ed",
//     "lastName" : "Wippler",
//     "email" : "ed.wippler@gmail.com"
// },
// {
//     //"_id" : ObjectId("58ebb0dc2bb27f227c4fc35a"),
//     "firstName" : "Paul",
//     "lastName" : "Dunkirk",
//     "email" : "pauldunkirk@gmail.com"
// }
// ]


function exportCsv() {
var usersBuilder = new CsvBuilder({
	// define headers and order of headers
	headers: 'Firstname Lastname Email',
	// define object to header correspondance
	constraints: {
		// Header: property
    'Firstname': 'firstName',
    'Lastname': 'lastName',
		'Email': 'email'
	}
});

// From the `usersBuilder` instance we can now spawn readable or tranform streams.

// Create a readable stream from an Array<Object> payload
// usersBuilder.createReadStream(payload)
usersBuilder.createReadStream(sampleObjects)
	.pipe(fs.createWriteStream('output.csv'));
}
module.exports = 