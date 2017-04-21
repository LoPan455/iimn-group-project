app.controller('SummaryController', function(ClientFactory) {
  console.log('SummaryController controller running');

  var self = this;
  self.client = ClientFactory.client;

ClientFactory.saveClientData(self.client);


  self.totalLifeExpenses = self.client.details.monthlyTotalDependentRelatedExpenses + self.client.details.monthlyTotalCreditCardLoanDebtPayments + self.client.details.monthlyTotalPersonalExpenses + self.client.details.monthlyTotalMiscellaneousExpenses;

  //recommended budget expenses based on income
  self.suggestedHousing = self.client.details.totalMonthlyIncome * 0.35;
  self.suggestedUtilities = self.client.details.totalMonthlyIncome * 0.05;
  self.suggestedFood = self.client.details.totalMonthlyIncome * 0.1;
  self.suggestedTransportation = self.client.details.totalMonthlyIncome * 0.1;
  self.suggestedHealth = self.client.details.totalMonthlyIncome * 0.05;
  self.suggestedSavings = self.client.details.totalMonthlyIncome * 0.1;
  self.suggestedMisc = self.client.details.totalMonthlyIncome * 0.15;


  self.benchmarkData = [35, 5, 10, 10, 5, 10, 15];
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
  ClientFactory.export();
};




});//end app.controller
