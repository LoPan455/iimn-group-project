var express = require('express');
var router = express.Router();
var Client = require('../models/clientMasterSchema');
var mongoose = require('mongoose');
var mongoConnection = require('../modules/mongo-connection');

mongoConnection.connect();


// create a new client document in the 'client' collection

router.post('/newClient', function(req,res){
  console.log('client/newClient route hit');
  console.log('req.body is: ', req.body);
  var newClient = new Client({
    clientName: req.body.firstName
  });
  newClient.save(function(err,result){
    if(err){
      console.log('there was an error adding the new client to the db: ',err);
      res.sendStatus(500);
    } else {
      console.log('successfully added a new client to the db: ',result);
      res.send(result)
    }//end else
  })//end newClient.save
});//end router.post








module.exports = router;
