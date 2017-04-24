var express = require('express');
var router = express.Router();
var clientBalance = require('../models/clientBalanceSchema');
var mongoConnection = require('../modules/mongo-connection');
mongoConnection.connect();


router.get('/clientbalanceschema', function(req, res) {
  console.log('clientSchema.route.js / login route hit: ', req.decodedToken);
  var clientBalanceSchemaToken = req.decodedToken; // creating variable which equals the decoded token email.
  
  
  
  
  UserMon.findOne(
    {
      name: clientName
    },
    function(err, receipt) {
      if (err) {
        console.log('clientSchema.route.js / error completing user query', err);
        res.sendStatus(500);
      } else {
          console.log('clientSchema.route.js / successful user query', receipt);
          res.sendStatus(200); // send is for data, status for messages.

        }
    });
});

module.exports = router;
