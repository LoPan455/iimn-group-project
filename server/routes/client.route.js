var express = require('express');
var router = express.Router();
var Client = require('../models/clientMasterSchema');
var mongoose = require('mongoose');
var mongoConnection = require('../modules/mongo-connection');

// mongoConnection.connect();

/*************************************
GET REQUESTS
*////////////////////////////////////////

  // the client 'rescue' option


//  model.find({ ... }).sort({ field : criteria}).exec(function(err, model){ ... });

router.get('/rescue', function(req,res){
  console.log('client/resuce route hit');
  // var clientId = require('mongodb').ObjectId(req.query.id);
  Client.find({})
  .sort({_id:-1})
  .limit(1).exec(function(err,result){
    if(err){
      console.log('there was an error finding the client: ',err);
      res.sendStatus(500);
    } else {
      console.log('successfully found this client:',result);
      res.send(result)
    }//end else
  })//end /get
});//end




/*************************************
POST REQUESTS
*////////////////////////////////////////

// create a new client document in the 'client' collection

router.post('/newClient', function(req,res){
  
  console.log('client/newClient route hit AND req.body is: ', req.body);
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

router.patch('/update/',function(req,res){
  // console.log('client/update:id route hit. req is: ', req);
  console.log('client.route.js / router.patch / req.body = ',req.body);
  var clientId = require('mongodb').ObjectId(req.query.id);
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
            console.log('client.route.js / router.patch / client.update success: ',client);
            res.send(client);
        });
    })//end router.put







module.exports = router;
