app.controller('SummaryController', function(ClientFactory,$firebaseAuth, hotkeys, $state) {
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
           ClientFactory.saveClientData(self.client.details);
         } else {
           console.log('you no longer have a client in the front end, perfoming rescue');
           ClientFactory.rescueClientData();
         }
       }
   });


  self.totalLifeExpenses = self.client.details.monthlyTotalDependentRelatedExpenses + self.client.details.monthlyTotalCreditCardLoanDebtPayments + self.client.details.monthlyTotalPersonalExpenses + self.client.details.monthlyTotalMiscellaneousExpenses;

  //recommended budget expenses based on income
  self.suggestedHousing = self.client.details.totalMonthlyIncome * 0.35;
  self.suggestedUtilities = self.client.details.totalMonthlyIncome * 0.05;
  self.suggestedFood = self.client.details.totalMonthlyIncome * 0.1;
  self.suggestedTransportation = self.client.details.totalMonthlyIncome * 0.1;
  self.suggestedHealth = self.client.details.totalMonthlyIncome * 0.05;
  self.suggestedSavings = self.client.details.totalMonthlyIncome * 0.1;
  self.suggestedMisc = self.client.details.totalMonthlyIncome * 0.15;


  
  self.benchmarkData = [self.suggestedHousing, self.suggestedUtilities, self.suggestedFood, self.suggestedTransportation, self.suggestedHealth, self.suggestedSavings, self.suggestedMisc];
  self.benchmarkLabels = ["Housing", "Utilities", "Food", "Transportation", "Health", "Savings", "Miscellaneous"];
  self.benchmarkOptions = {
          legend: {
              display: false,
              position: 'right'
          }
      };



// client pie-chart populated
  self.clientData = [self.client.details.monthlyTotalHousingExpenses, self.client.details.monthlyTotalUtilities, self.client.details.monthlyTotalFoodExpenses, self.client.details.monthlyTotalTransportationExpenses, self.client.details.monthlyTotalHealthRelatedExpenses, self.client.details.monthlySavingsTarget, self.totalLifeExpenses ];
  self.clientLabels = ["Housing", "Utilities", "Food", "Transportation", "Health", "Savings", "Miscellaneous"];
  self.clientOptions = {
          legend: {
              display: false,
              position: 'right'
          }
      };


self.export = function() {
  console.log('CSV-Spreadsheet Download clicked.')
  ClientFactory.export();
};

hotkeys.add({
  combo: 'shift+alt+n',
  description: 'Begins a new interview session',
  callback: function(){
    console.log('Before new session', self.client);
    ClientFactory.newSession();
    console.log('After new session',self.client);
    $state.transitionTo('welcome')
  }
});


});//end app.controller
