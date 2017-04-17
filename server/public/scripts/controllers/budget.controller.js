app.controller('BudgetController', function(ClientFactory) {


  console.log('BudgetController controller running');
  var self = this;

  self.client = ClientFactory.client;
  console.log('self.client is an empty object',self.client);

  self.client.totalMonthlyIncomeNet=self.client.totalMonthlyIncomeNet||0;

  self.mortgageOption = false;
  self.secondMortgage = function (){
    self.mortgageOption = !self.mortgageOption;
  };

  self.addIncome = function(incomeField){
       if (incomeField == null) {
         incomeField = 0;
         console.log('conditional of addIncome was hit');
       }
        console.log('addIncome hit');
       self.client.totalMonthlyIncomeNet += Number (incomeField);
       return self.client.totalMonthlyIncomeNet;
   };

  self.updateIncome = function(incomeField){
       if (incomeField == null) {
         incomeField = 0;
         console.log('conditional of updateIncome was hit');
       }
       console.log('updateIncome was hit');
       self.client.totalMonthlyIncomeNet -=  incomeField;
       return self.client.totalMonthlyIncomeNet;
    };





});//end app.controller
