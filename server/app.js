require('dotenv').config();
var express = require('express');
var app = express();
var path = require('path');
var portDecision = process.env.PORT || 5000;

 // initializes the server routes
var user = require('./routes/user.route.js');
var client = require('./routes/client.route.js');
var summary = require('./routes/summary.route.js');

// intialize the Firebase token decoder and user account verification
var decoder = require('./modules/decoder.js');

// initializes body-parser to handle inbound AJAX data payload
var bodyParser = require('body-parser');



app.get('/', function(req, res){
  res.sendFile(path.resolve('server/public/views/index.html'));
});

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// all server routes will have be processed by the token decoder first.
// therefore all inbound AJAX requests require the Firebase token in the header

app.use(decoder.token);

// once the Token has been deocoded and user email verified, the routes can
//process each inbound request

app.use('/user', user);
app.use('/client', client);
app.use('/summary',summary); // need token in factory

app.listen(portDecision, function(){
  console.log("Listening on port: ", portDecision);
});
