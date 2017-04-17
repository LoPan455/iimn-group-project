var admin = require("firebase-admin");
var serviceAccount = require("../firebase-service-account.json");
var UserMon = require('../models/user');
var mongoConnection = require('../modules/mongo-connection'); // needed for user authorization
mongoConnection.connect(); // checks for a valid user in the database

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fhat-iimn-e55ca.firebaseio.com"
});
var tokenDecoder = function(req, res, next) {
  if (req.headers.id_token) {
    admin.auth().verifyIdToken(req.headers.id_token).then(function(decodedToken) {
      req.decodedToken = decodedToken;
      next();
    })
    .catch(function(error) {
      console.log('User token unverified');
      res.sendStatus(403);
    });
  } else {
    res.sendStatus(403); // chrome error handling??
  }
};
module.exports = { token: tokenDecoder };
