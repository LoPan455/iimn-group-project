var express = require('express');
var router = express.Router();
var Client = require('../models/clientMasterSchema');
var mongoose = require('mongoose');
var mongoConnection = require('../modules/mongo-connection');

// mongoConnection.connect();

/*************************************
POST REQUESTS
*////////////////////////////////////////

// create a new client document in the 'client' collection

router.post('/newClient', function(req,res){
  console.log('client/newClient route hit');
  console.log('req.body is: ', req.body);
  var newClient =  new Client(req.body);
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

/*****************************************
PUT REQUESTS
*////////////////////////////////////////

router.put('/update/:id',function(req,res){
  console.log('client/update:id route hit. req.params.id is: ', req.params.id);
  console.log('the req.body is: ',req.body);
  var clientId = req.params.id;
  var clientObject = req.body
  Client.findById(req.params.id, function (err, client) {
    // Handle any possible database errors
    if (err) {
        console.log('there was an error finding the client to update',err);
        res.status(500).send(err);
    } else {
        // Update each attribute with any possible attribute that may have been submitted in the body of the request
        // If that attribute isn't in the request body, default back to whatever it was before.

        // Save the updated document back to the database
        Client.save(function (err, client) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(client);
        });
    }
});
})//end router.put







module.exports = router;
