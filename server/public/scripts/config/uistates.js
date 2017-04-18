app.config(function($stateProvider,$urlRouterProvider) {

  var main = {
    name: 'main',
    url: '/main',
    controller: 'MainStateController',
    controllerAs: 'msc',
    templateUrl: '/views/mainstate.html'
  };
  var login = {
    name: 'login',
    url: '/login',
    controller: 'LoginController',
    controllerAs: 'lc',
    templateUrl:'/views/login.html'
  };
  var welcome = {
    name: 'welcome',
    url: '/welcome',
    controller: 'WelcomeController',
    controllerAs: 'wc',
    templateUrl:'/views/welcome.html'
  };
  var profile = {
    name: 'profile',
    url: '/profile',
    controller: 'ProfileController',
    controllerAs: 'pc',
    templateUrl:'/views/profile.html'
  };
  var mainState = {
    name: 'main',
    url: '/main',
    controlller: 'MainController',
    controllerAs: 'mc',
    templateUrl: '/views/mainstate.html'
  };
  var budget = {
    name: 'main.budget',
    controller: 'BudgetController',
    controllerAs: 'bc',
    templateUrl:'/views/budget.html'
  };
  var budgetIncome = {
    name: 'main.budget.income',
    controller: 'BudgetIncomeController',
    controllerAs: 'bic',
    templateUrl:'/views/budgetincome.html'
  };
  var budgetExpenses = {
    name: 'main.budget.expenses',
    controller: 'BudgetExpensesController',
    controllerAs: 'bec',
    templateUrl:'/views/budgetexpenses.html'
  };
  var budgetThree = {
    name: 'main.budget.three',
    controller: 'BudgetController',
    controllerAs: 'bc',
    templateUrl:'/views/budgetthree.html'
  };
  var balanceSheet = {
    name: 'main.balanceSheet',
    controller: 'BalanceSheetController',
    controllerAs: 'bsc',
    templateUrl: '/views/balancesheet.html'
  };
  var balanceSheetAssets = {
    name: 'main.balanceSheet.assets',
    controller: 'BalanceSheetController',
    controllerAs: 'bsc',
    templateUrl: '/views/balancesheetAssets.html'
  };
  var balanceSheetLiabilities = {
    name: 'main.balanceSheet.liabilities',
    controller: 'BalanceSheetController',
    controllerAs: 'bsc',
    templateUrl: '/views/balancesheetLiabilities.html'
  };
  var balanceSheetSnapshot = {
    name: 'main.balanceSheet.snapshot',
    controller: 'BalanceSheetController',
    controllerAs: 'bsc',
    templateUrl: '/views/balancesheetSnapshot.html'
  };
  var creditReport = {
    name: 'main.creditReport',
    controller: 'CreditReportController',
    controllerAs: 'crc',
    templateUrl: '/views/creditreport.html'
  };
  var creditReportPreface = {
    name: 'main.creditReport.preface',
    controller: 'CreditReportController',
    controllerAs: 'crc',
    templateUrl: '/views/creditreportpreface.html'
  };
  var creditReportScores = {
    name: 'main.creditReport.scores',
    controller: 'CreditReportController',
    controllerAs: 'crc',
    templateUrl: '/views/creditreportscores.html'
  };
  var creditReportLines = {
    name: 'main.creditReport.lines',
    controller: 'CreditReportController',
    controllerAs: 'crc',
    templateUrl: '/views/creditreportlines.html'
  };
  var summary = {
    name: 'main.summary',
    controller: 'SummaryController',
    controllerAs: 'sc',
    templateUrl: '/views/summary.html'
  };
  $stateProvider.state(login);
  $stateProvider.state(main);
  $stateProvider.state(welcome);
  $stateProvider.state(profile);
  $stateProvider.state(budget);
  $stateProvider.state(budgetIncome);
  $stateProvider.state(budgetExpenses);
  $stateProvider.state(budgetThree);
  $stateProvider.state(balanceSheet);
  $stateProvider.state(balanceSheetAssets);
  $stateProvider.state(balanceSheetLiabilities);
  $stateProvider.state(balanceSheetSnapshot);
  $stateProvider.state(creditReport);
  $stateProvider.state(creditReportPreface);
  $stateProvider.state(creditReportScores);
  $stateProvider.state(creditReportLines);
  $stateProvider.state(summary);

  $urlRouterProvider.when('', '/login');
});
