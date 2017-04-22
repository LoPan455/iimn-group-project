var express = require('express');
var app = express();
var path = require('path');
var portDecision = process.env.PORT || 5000;
var user = require('./routes/user.route.js');
var client = require('./routes/client.route.js');
var decoder = require('./modules/decoder.js');
var bodyParser = require('body-parser');
var summary = require('./routes/summary.route.js');


app.get('/', function(req, res){
  res.sendFile(path.resolve('server/public/views/index.html'));
});

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/client', client);

app.use(decoder.token);
app.use('/user', user);

app.use('/summary',summary)




app.listen(portDecision, function(){
  console.log("Listening on port: ", portDecision);
});
