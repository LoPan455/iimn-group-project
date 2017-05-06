// This willl process the encyrpted token attached to any inbound requests and check the 'users' db collection to confirm that the requestor exists in the db.

var admin = require("firebase-admin");
// var serviceAccount = require("../firebase-service-account.json");
var UserMon = require('../models/user');


admin.initializeApp({
  credential: admin.credential.cert({
    "type": process.env.FIREBASE_SERVICE_ACCOUNT_TYPE,
    "project_id": process.env.FIREBASE_SERVICE_ACCOUNT_PROJECT_ID,
    "private_key_id": process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
    "private_key": process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY,
    "client_email": process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL,
    "client_id": process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_ID,
    "auth_uri": process.env.FIREBASE_SERVICE_ACCOUNT_AUTH_URI,
    "token_uri": process.env.FIREBASE_SERVICE_ACCOUNT_TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.FIREBASE_SERVICE_ACCOUNT_AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL}),
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

          // error handling in the event the token cannnot be verified

          console.log('User token unverified');
          res.sendStatus(403);
        });
      });
    } else {
      res.sendStatus(403);
    }
  };






  module.exports = { token: tokenDecoder };
