app.controller('SummaryController', function(ClientFactory,$firebaseAuth) {
  console.log('SummaryController controller running');

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


  self.totalLifeExpenses = self.client.monthlyTotalDependentRelatedExpenses + self.client.monthlyTotalCreditCardLoanDebtPayments + self.client.monthlyTotalPersonalExpenses + self.client.monthlyTotalMiscellaneousExpenses;

  self.benchmarkData = [35, 5, 10, 10, 5, 10, 15];
  self.benchmarkLabels = ["Housing", "Utilities", "Food", "Transportation", "Health", "Savings", "Miscellaneous"];
  self.benchmarkOptions = {
          legend: {
              display: false,
              position: 'right'
          }
      };



  self.clientData = [self.client.monthlyTotalHousingExpenses, self.client.monthlyTotalUtilities, self.client.monthlyTotalFoodExpenses, self.client.monthlyTotalTransportationExpenses, self.client.monthlyTotalHealthRelatedExpenses, self.client.monthlySavingsTarget, self.totalLifeExpenses ];
  self.clientLabels = ["Housing", "Utilities", "Food", "Transportation", "Health", "Savings", "Miscellaneous"];
  self.clientOptions = {
          legend: {
              display: false,
              position: 'right'
          }
      };


self.export = function() {
  ClientFactory.export();
};




});//end app.controller
