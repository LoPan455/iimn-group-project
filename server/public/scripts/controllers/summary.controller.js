app.controller('SummaryController', function(ClientFactory) {
  console.log('SummaryController controller running');

  var self = this;

  self.client = ClientFactory.client;

  self.totalLifeExpenses = self.monthlyTotalDependentRelatedExpenses + self.monthlyTotalCreditCardLoanDebtPayments + self.monthlyTotalPersonalExpenses + self.monthlyTotalMiscellaneousExpenses;

});//end app.controller
