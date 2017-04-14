app.controller('BudgetIncomeController', function(ClientFactory) {


  console.log('BudgetIncomeController controller running');
  var self = this;

  self.user = ClientFactory.client;

});//end app.controller
