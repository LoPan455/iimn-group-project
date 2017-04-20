app.controller('SummaryController', function(ClientFactory) {
  console.log('SummaryController controller running');

  var self = this;
  var dude = {
    food: 40,
    housing: 60,
    health: 90
  };

  self.client = ClientFactory.client;
  ClientFactory.saveClientData(self.client)


  self.totalLifeExpenses = self.client.monthlyTotalDependentRelatedExpenses + self.client.monthlyTotalCreditCardLoanDebtPayments + self.client.monthlyTotalPersonalExpenses + self.client.monthlyTotalMiscellaneousExpenses;

  self.benchmarkData = [35, 5, 10, 10, 5, 10, 15];
  self.benchmarkLabels = ["Housing", "Utilities", "Food", "Transportation", "Health", "Savings", "Miscellaneous"];
  self.benchmarkOptions = {
          legend: {
              display: true,
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
}




});//end app.controller
