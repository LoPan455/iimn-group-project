app.controller('BudgetController', function(ClientFactory) {


    console.log('BudgetController controller running');
    var self = this;

    // self.client = ClientFactory.client;
    console.log('self.client is an empty object', self.client);
    ClientFactory.saveClientData(self.client);

    self.client.totalMonthlyIncome = self.client.totalMonthlyIncome || 0;
    self.client.totalMonthlyExpenses = self.client.totalMonthlyExpenses || 0;

    self.client.monthlySavingsTarget = self.client.monthlySavingsTarget;
    self.client.totalMonthlyNetIncome = self.client.totalMonthlyNetIncome || 0;

    self.client.monthlyTotalHousingExpenses = self.client.monthlyTotalHousingExpenses || 0;
    self.client.monthlyTotalUtilities = self.client.monthlyTotalUtilities || 0;
    self.client.monthlyTotalFoodExpenses = self.client.monthlyTotalFoodExpenses || 0;
    self.client.monthlyTotalTransportationExpenses = self.client.monthlyTotalTransportationExpenses || 0;
    self.client.monthlyTotalHealthRelatedExpenses = self.client.monthlyTotalHealthRelatedExpenses || 0;
    self.client.monthlyTotalDependentRelatedExpenses = self.client.monthlyTotalDependentRelatedExpenses || 0;
    self.client.monthlyTotalCreditCardLoanDebtPayments = self.client.monthlyTotalCreditCardLoanDebtPayments || 0;
    self.client.monthlyTotalPersonalExpenses = self.client.monthlyTotalPersonalExpenses || 0;
    self.client.monthlyTotalMiscellaneousExpenses = self.client.monthlyTotalMiscellaneousExpenses || 0;


    self.mortgageOption = false;
    self.secondMortgage = function() {
        self.mortgageOption = !self.mortgageOption;
    };

    self.addIncome = function(incomeField) {
        if (incomeField == null) {
            incomeField = 0;
            console.log('conditional of addIncome was hit');
        }
        console.log('addIncome hit');
        self.client.totalMonthlyIncome += Number(incomeField);
        return self.client.totalMonthlyIncome;
    };

    self.updateIncome = function(incomeField) {
        if (incomeField == null) {
            incomeField = 0;
            console.log('conditional of updateIncome was hit');
        }
        console.log('updateIncome was hit');
        self.client.totalMonthlyIncome -= incomeField;
        return self.client.totalMonthlyIncome;
    };

    self.updateExpenses = function() {
        self.client.totalMonthlyExpenses = self.client.monthlyTotalHousingExpenses + self.client.monthlyTotalUtilities + self.client.monthlyTotalFoodExpenses + self.client.monthlyTotalTransportationExpenses +
            self.client.monthlyTotalHealthRelatedExpenses +
            self.client.monthlyTotalDependentRelatedExpenses +
            self.client.monthlyTotalCreditCardLoanDebtPayments +
            self.client.monthlyTotalPersonalExpenses +
            self.client.monthlyTotalMiscellaneousExpenses;

        self.calculateBudget();
        return self.client.totalMonthlyExpenses;
    };

    self.calculateBudget = function() {
        self.client.totalMonthlyNetIncome = self.client.totalMonthlyIncome - self.client.totalMonthlyExpenses;
        return self.client.totalMonthlyNetIncome;
    };



    //housing section
    self.addHousing = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalHousingExpenses += Number(expenseField);
        return self.client.monthlyTotalHousingExpenses;
    };

    self.updateHousing = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalHousingExpenses -= expenseField;
        return self.client.monthlyTotalHousingExpenses;
    };

    //utilities section
    self.addUtilities = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalUtilities += Number(expenseField);
        return self.client.monthlyTotalUtilities;
    };

    self.updateUtilities = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalUtilities -= expenseField;
        return self.client.monthlyTotalUtilities;
    };

    //food section
    self.addFood = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalFoodExpenses += Number(expenseField);
        return self.client.monthlyTotalFoodExpenses;
    };

    self.updateFood = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalFoodExpenses -= expenseField;
        return self.client.monthlyTotalFoodExpenses;
    };

    //transportation section
    self.addTransportation = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalTransportationExpenses += Number(expenseField);
        return self.client.monthlyTotalTransportationExpenses;
    };

    self.updateTransportation = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalTransportationExpenses -= expenseField
        return self.client.monthlyTotalTransportationExpenses;
    };

    //health section
    self.addHealth = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalHealthRelatedExpenses += Number(expenseField);
        return self.client.monthlyTotalHealthRelatedExpenses;
    };

    self.updateHealth = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalHealthRelatedExpenses -= expenseField
        return self.client.monthlyTotalHealthRelatedExpenses;
    };

    //dependent section
    self.addDependent = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalDependentRelatedExpenses += Number(expenseField);
        return self.client.monthlyTotalDependentRelatedExpenses;
    };

    self.updateDependent = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalDependentRelatedExpenses -= expenseField
        return self.client.monthlyTotalDependentRelatedExpenses;
    };

    //debt section
    self.addDebt = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalCreditCardLoanDebtPayments += Number(expenseField);
        return self.client.monthlyTotalCreditCardLoanDebtPayments;
    };

    self.updateDebt = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalCreditCardLoanDebtPayments -= expenseField
        return self.client.monthlyTotalCreditCardLoanDebtPayments;
    };
    //personal section
    self.addPersonal = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalPersonalExpenses += Number(expenseField);
        return self.client.monthlyTotalPersonalExpenses;
    };

    self.updatePersonal = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalPersonalExpenses -= expenseField
        return self.client.monthlyTotalPersonalExpenses;
    };
    //misc section
    self.addMisc = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalMiscellaneousExpenses += Number(expenseField);
        return self.client.monthlyTotalMiscellaneousExpenses;
    };

    self.updateMisc = function(expenseField) {
        if (expenseField == null) {
            expenseField = 0;
        }
        self.client.monthlyTotalMiscellaneousExpenses -= expenseField
        return self.client.monthlyTotalMiscellaneousExpenses;
    };
}); //end app.controller
