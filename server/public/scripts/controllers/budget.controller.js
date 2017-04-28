app.controller('BudgetController', function(ClientFactory, hotkeys, $state, $firebaseAuth) {

  console.log('BudgetController controller running');
  var self = this;
  var auth = $firebaseAuth();

  self.client = ClientFactory.client;
  self.currentNavItem = 'main.budget.income'

  // building this out to prevent the race condition on inadvertent page reload
     auth.$onAuthStateChanged(function(firebaseUser) {
       console.log('$onAuthStateChangedTriggered');
       if (firebaseUser) {
         if (self.client.details.hasOwnProperty('_id') ){ // similar to TypeOf
           console.log('ok, you have a client. self.client.details.details is: ',self.client.details);
           console.log('we will save the updated client now....');
           ClientFactory.saveClientData(self.client.details)
         } else {
           console.log('you no longer have a client in the front end, perfoming rescue');
           ClientFactory.rescueClientData()
         }
       }
   });


  self.client.details.totalMonthlyIncome = self.client.details.totalMonthlyIncome || 0;
  self.client.details.totalMonthlyExpenses = self.client.details.totalMonthlyExpenses || 0;

  self.client.details.monthlySavingsTarget = self.client.details.monthlySavingsTarget;
  self.client.details.totalMonthlyNetIncome = self.client.details.totalMonthlyNetIncome || 0;

  self.client.details.monthlyTotalHousingExpenses = self.client.details.monthlyTotalHousingExpenses || 0;
  self.client.details.monthlyTotalUtilities = self.client.details.monthlyTotalUtilities || 0;
  self.client.details.monthlyTotalFoodExpenses = self.client.details.monthlyTotalFoodExpenses || 0;
  self.client.details.monthlyTotalTransportationExpenses = self.client.details.monthlyTotalTransportationExpenses || 0;
  self.client.details.monthlyTotalHealthRelatedExpenses = self.client.details.monthlyTotalHealthRelatedExpenses || 0;
  self.client.details.monthlyTotalDependentRelatedExpenses = self.client.details.monthlyTotalDependentRelatedExpenses || 0;
  self.client.details.monthlyTotalCreditCardLoanDebtPayments = self.client.details.monthlyTotalCreditCardLoanDebtPayments || 0;
  self.client.details.monthlyTotalPersonalExpenses = self.client.details.monthlyTotalPersonalExpenses || 0;
  self.client.details.monthlyTotalMiscellaneousExpenses = self.client.details.monthlyTotalMiscellaneousExpenses || 0;



  self.addIncome = function(incomeField) {
    if (incomeField == null) {
      incomeField = 0;
    }
    self.client.details.totalMonthlyIncome += Number(incomeField);
    self.calculateBudget();
    return self.client.details.totalMonthlyIncome;
  };

  self.updateIncome = function(incomeField) {
    if (incomeField == null) {
      incomeField = 0;
    }
    self.client.details.totalMonthlyIncome -= incomeField;
    self.calculateBudget();
    return self.client.details.totalMonthlyIncome;
  };

  self.updateExpenses = function() {
    self.client.details.totalMonthlyExpenses = self.client.details.monthlyTotalHousingExpenses + self.client.details.monthlyTotalUtilities + self.client.details.monthlyTotalFoodExpenses + self.client.details.monthlyTotalTransportationExpenses +
    self.client.details.monthlyTotalHealthRelatedExpenses +
    self.client.details.monthlyTotalDependentRelatedExpenses +
    self.client.details.monthlyTotalCreditCardLoanDebtPayments +
    self.client.details.monthlyTotalPersonalExpenses +
    self.client.details.monthlyTotalMiscellaneousExpenses;

    self.calculateBudget();
    return self.client.details.totalMonthlyExpenses;
  };

  self.calculateBudget = function() {
    self.client.details.totalMonthlyNetIncome = self.client.details.totalMonthlyIncome - self.client.details.totalMonthlyExpenses;
    return self.client.details.totalMonthlyNetIncome;
  };



  //housing section
  self.addHousing = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalHousingExpenses += Number(expenseField);
    return self.client.details.monthlyTotalHousingExpenses;
  };

  self.updateHousing = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalHousingExpenses -= expenseField;
    return self.client.details.monthlyTotalHousingExpenses;
  };

  //utilities section
  self.addUtilities = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalUtilities += Number(expenseField);
    return self.client.details.monthlyTotalUtilities;
  };

  self.updateUtilities = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalUtilities -= expenseField;
    return self.client.details.monthlyTotalUtilities;
  };

  //food section
  self.addFood = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalFoodExpenses += Number(expenseField);
    return self.client.details.monthlyTotalFoodExpenses;
  };

  self.updateFood = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalFoodExpenses -= expenseField;
    return self.client.details.monthlyTotalFoodExpenses;
  };

  //transportation section
  self.addTransportation = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalTransportationExpenses += Number(expenseField);
    return self.client.details.monthlyTotalTransportationExpenses;
  };

  self.updateTransportation = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalTransportationExpenses -= expenseField;
    return self.client.details.monthlyTotalTransportationExpenses;
  };

  //health section
  self.addHealth = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalHealthRelatedExpenses += Number(expenseField);
    return self.client.details.monthlyTotalHealthRelatedExpenses;
  };

  self.updateHealth = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalHealthRelatedExpenses -= expenseField;
    return self.client.details.monthlyTotalHealthRelatedExpenses;
  };

  //dependent section
  self.addDependent = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalDependentRelatedExpenses += Number(expenseField);
    return self.client.details.monthlyTotalDependentRelatedExpenses;
  };

  self.updateDependent = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalDependentRelatedExpenses -= expenseField;
    return self.client.details.monthlyTotalDependentRelatedExpenses;
  };

  //debt section
  self.addDebt = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalCreditCardLoanDebtPayments += Number(expenseField);
    return self.client.details.monthlyTotalCreditCardLoanDebtPayments;
  };

  self.updateDebt = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalCreditCardLoanDebtPayments -= expenseField
    return self.client.details.monthlyTotalCreditCardLoanDebtPayments;
  };
  //personal section
  self.addPersonal = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalPersonalExpenses += Number(expenseField);
    return self.client.details.monthlyTotalPersonalExpenses;
  };

  self.updatePersonal = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalPersonalExpenses -= expenseField
    return self.client.details.monthlyTotalPersonalExpenses;
  };
  //misc section
  self.addMisc = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalMiscellaneousExpenses += Number(expenseField);
    return self.client.details.monthlyTotalMiscellaneousExpenses;
  };

  self.updateMisc = function(expenseField) {
    if (expenseField == null) {
      expenseField = 0;
    }
    self.client.details.monthlyTotalMiscellaneousExpenses -= expenseField
    return self.client.details.monthlyTotalMiscellaneousExpenses;
  };

  hotkeys.add({
    combo: 'alt+1',
    description: 'Switch to budget income',
    callback: function(){
      self.addIncome();
      self.updateExpenses();
      $state.transitionTo('main.budget.income');
    }
  });

  hotkeys.add({
    combo: 'alt+2',
    description: 'Switch to budget expenses',
    callback: function(){
      self.addIncome();
      self.updateExpenses();
      $state.transitionTo('main.budget.expenses');
    }
  });

  hotkeys.add({
    combo: 'alt+3',
    description: 'Switch to budget snapshot',
    callback: function(){
      self.addIncome();
      self.updateExpenses();
      $state.transitionTo('main.budget.snapshot');
    }
  });

}); //end app.controller
