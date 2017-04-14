app.controller('BudgetExpensesController', function(ClientFactory) {


  console.log('BudgetExpensesController controller running');
  var self = this;

  self.user = ClientFactory.client;

  self.mortgageOption = false;
  self.secondMortgage = function (){
    self.mortgageOption = !self.mortgageOption;
  };


});//end app.controller
