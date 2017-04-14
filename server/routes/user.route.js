var express = require('express');
var router = express.Router();
// var admin = require('firebase-admin');
// var serviceAccount = require('../firebase-service-account.json');
var UserMon = require('../models/user');
// var mongoose = require('mongoose');
var mongoConnection = require('../modules/mongo-connection');
mongoConnection.connect();
// var decoder = require('../modules/decoder.js');
// var decodedToken = 

router.get('/logIn', function(req, res) {
  console.log('/login route hit: ', req.decodedToken.email);
  var userEmail = req.decodedToken.email; // creating variable which equals the decoded token email.
  UserMon.findOne(
    {
      email: userEmail
    },
    function(err, user) {
      // 'email' must match db
      if (err) {
        console.log('Error completing user query', err);
        res.sendStatus(500);
      } else {
          console.log('successful user query', user);
          res.send(user); // send is for data, status for messages.
        }
    });
});

module.exports = router;
