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

router.patch('/update/:id',function(req,res){
  console.log('client/update:id route hit. req.params.id is: ', req.params.id);
  console.log('the req.body is: ',req.body);
  var clientId = require('mongodb').ObjectId(req.params.id);
  var clientObject = req.body
  Client.update(
          {_id: clientId},
          {
            $set: clientObject
          },function (err, client) {
            if (err) {
                console.log('there was an error updating the client document',err);
                res.status(500).send(err)
            }
            console.log('success updating the client document. Returning: ',client);
            res.send(client);
        });
    })//end router.put







module.exports = router;
