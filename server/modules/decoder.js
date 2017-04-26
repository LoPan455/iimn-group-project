// This willl process the encyrpted token attached to any inbound requests and check the 'users' db collection to confirm that the requestor exists in the db.

var admin = require("firebase-admin");
var serviceAccount = require("../firebase-service-account.json");
var UserMon = require('../models/user');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fhat-iimn-e55ca.firebaseio.com"
});

var tokenDecoder = function(req, res, next) {
  if (req.headers.id_token) {

    // decodes the encrypted token

    admin.auth().verifyIdToken(req.headers.id_token).then(function(decodedToken) {
      req.decodedToken = decodedToken;
      var userEmail = req.decodedToken.email;

      // checks for a corresponding user in the db

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

            // runs whatever function is next in app.js

            next();
          }
        })
        .catch(function(error) {
          console.log('User token unverified');
          res.sendStatus(403);
        });
      })
    } else {
      res.sendStatus(403);
    }
  };






  module.exports = { token: tokenDecoder };
