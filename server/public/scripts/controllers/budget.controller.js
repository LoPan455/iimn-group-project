app.controller('BudgetController', function(ClientFactory) {
  console.log('BudgetController controller running');
  var self = this;

  self.client = ClientFactory.client;
  console.log('self.client is an empty object', self.client);
  ClientFactory.saveClientData(self.client);

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

}); //end app.controller
