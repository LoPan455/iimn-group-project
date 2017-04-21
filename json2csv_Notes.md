https://www.npmjs.com/package/json2csv
/////////////////////////////////////////////////////////////////////////////////
#Example 2
*Similarly to mongoexport you can choose which fields to export.*
*Note: this example uses the optional callback format.*

var json2csv = require('json2csv');
var fields = ['car', 'color'];
 
json2csv({ data: myCars, fields: fields }, function(err, csv) {
  if (err) console.log(err);
  console.log(csv);
});

**Results in:**
car, color
"Audi", "blue"
"BMW", "black"
"Porsche", "green"

/////////////////////////////////////////////////////////////////////////////////
#Example 7
*You can unwind arrays similar to MongoDB's $unwind operation using the unwindPath option.*

var json2csv = require('json2csv');
var fs = require('fs');
var fields = ['carModel', 'price', 'colors'];
var myCars = [
  {
    "carModel": "Audi",
    "price": 0,
    "colors": ["blue","green","yellow"]
  }, {
    "carModel": "BMW",
    "price": 15000,
    "colors": ["red","blue"]
  }, {
    "carModel": "Mercedes",
    "price": 20000,
    "colors": "yellow"
  }, {
    "carModel": "Porsche",
    "price": 30000,
    "colors": ["green","teal","aqua"]
  }
];
var csv = json2csv({ data: myCars, fields: fields, unwindPath: 'colors' });
 
fs.writeFile('file.csv', csv, function(err) {
  if (err) throw err;
  console.log('file saved');
});

**The content of the "file.csv" should be:**
"carModel","price","colors"
"Audi",0,"blue"
"Audi",0,"green"
"Audi",0,"yellow"
"BMW",15000,"red"
"BMW",15000,"blue"
"Mercedes",20000,"yellow"
"Porsche",30000,"green"
"Porsche",30000,"teal"
"Porsche",30000,"aqua"



/////////////////////////////////////////////////////////////////////////////////
db.clients.insert([
{
		"firstName" : "01a",
		"lastName" : "01b",
		"email" : "01c",
                "telephone" : "01d",
                "address" : "01e",
                "website" : "01f"
	},
        {
		"firstName" : "02a",
		"lastName" : "02b",
		"email" : "02c",
                "telephone" : "02d",
                "address" : "02e",
                "website" : "02f"
	}]
        );