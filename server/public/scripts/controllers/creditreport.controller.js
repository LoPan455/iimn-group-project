app.controller('CreditReportController', function(ClientFactory,$firebaseAuth) {

  console.log('CreditReportController controller running');

  var self = this;
  self.client = ClientFactory.client;

  var auth = $firebaseAuth();

  self.client = ClientFactory.client;
  // building this out to prevent the race condition on inadvertent page reload
     auth.$onAuthStateChanged(function(firebaseUser) {
       console.log('$onAuthStateChangedTriggered');
       if (firebaseUser) {
         if (self.client.details.hasOwnProperty('_id') ){
           console.log('ok, you have a client. self.client.details.details is: ',self.client.details);
           console.log('we will save the updated client now....');
           ClientFactory.saveClientData(self.client.details)
         } else {
           console.log('you no longer have a client in the front end, perfoming rescue');
           ClientFactory.rescueClientData()
         }
       }
   });

  // self.creditCardArray = [{cardNumber:1, name:"", limit:}];



});//end app.controller
