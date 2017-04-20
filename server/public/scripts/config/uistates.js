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
    controller: 'BudgetController',
    controllerAs: 'bc',
    templateUrl:'/views/budgetincome.html'
  };
  var budgetExpenses = {
    name: 'main.budget.expenses',
    controller: 'BudgetController',
    controllerAs: 'bc',
    templateUrl:'/views/budgetexpenses.html'
  };
  var budgetSnapshot = {
    name: 'main.budget.snapshot',
    controller: 'BudgetController',
    controllerAs: 'bc',
    templateUrl:'/views/budgetsnapshot.html'
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

  var piechart = {
    name: 'pieChart',
    url: '/piechart',
    controller: 'PieChartController',
    controllerAs: 'pie',
    templateUrl: 'views/pie-chart.html'
  };

  var profilequestions = {
    name: 'profilequestions',
    url: '/profilequestions',
    controller: 'ProfileQuestionsController',
    controllerAs: 'pqc',
    templateUrl: '/views/profilequestions/profilequestions.html'
  };

  var profilequestions1 = {
    name: 'profilequestions1',
    url: '/profilequestions1',
    controller: 'ProfileQuestionsController',
    controllerAs: 'pqc',
    templateUrl: '/views/profilequestions/profilequestions1.html'
  };
  var profilequestions2 = {
    name: 'profilequestions2',
    url: '/profilequestions2',
    controller: 'ProfileQuestionsController',
    controllerAs: 'pqc',
    templateUrl: '/views/profilequestions/profilequestions2.html'
  };
  var profilequestions3 = {
    name: 'profilequestions3',
    url: '/profilequestions3',
    controller: 'ProfileQuestionsController',
    controllerAs: 'pqc',
    templateUrl: '/views/profilequestions/profilequestions3.html'
  };
  var profilequestions4 = {
    name: 'profilequestions4',
    url: '/profilequestions4',
    controller: 'ProfileQuestionsController',
    controllerAs: 'pqc',
    templateUrl: '/views/profilequestions/profilequestions4.html'
  };

  var profilequestions5 = {
    name: 'profilequestions5',
    url: '/profilequestions5',
    controller: 'ProfileQuestionsController',
    controllerAs: 'pqc',
    templateUrl: '/views/profilequestions/profilequestions5.html'
  };
  var profilequestions6 = {
    name: 'profilequestions6',
    url: '/profilequestions6',
    controller: 'ProfileQuestionsController',
    controllerAs: 'pqc',
    templateUrl: '/views/profilequestions/profilequestions6.html'
  };
  var profilequestions7 = {
    name: 'profilequestions7',
    url: '/profilequestions7',
    controller: 'ProfileQuestionsController',
    controllerAs: 'pqc',
    templateUrl: '/views/profilequestions/profilequestions7.html'
  };
  var profilequestions8 = {
    name: 'profilequestions8',
    url: '/profilequestions8',
    controller: 'ProfileQuestionsController',
    controllerAs: 'pqc',
    templateUrl: '/views/profilequestions/profilequestions8.html'
  };
  var profilequestions9 = {
    name: 'profilequestions9',
    url: '/profilequestions9',
    controller: 'ProfileQuestionsController',
    controllerAs: 'pqc',
    templateUrl: '/views/profilequestions/profilequestions9.html'
  };
  var profilequestions10 = {
    name: 'profilequestions10',
    url: '/profilequestions10',
    controller: 'ProfileQuestionsController',
    controllerAs: 'pqc',
    templateUrl: '/views/profilequestions/profilequestions10.html'
  };
  var profilequestions11 = {
    name: 'profilequestions11',
    url: '/profilequestions11',
    controller: 'ProfileQuestionsController',
    controllerAs: 'pqc',
    templateUrl: '/views/profilequestions/profilequestions11.html'
  };



  $stateProvider.state(login);
  $stateProvider.state(main);
  $stateProvider.state(welcome);
  $stateProvider.state(profile);
  $stateProvider.state(budget);
  $stateProvider.state(budgetIncome);
  $stateProvider.state(budgetExpenses);
  $stateProvider.state(budgetSnapshot);
  $stateProvider.state(balanceSheet);
  $stateProvider.state(balanceSheetAssets);
  $stateProvider.state(balanceSheetLiabilities);
  $stateProvider.state(balanceSheetSnapshot);
  $stateProvider.state(creditReport);
  $stateProvider.state(creditReportPreface);
  $stateProvider.state(creditReportScores);
  $stateProvider.state(creditReportLines);
  $stateProvider.state(summary);
  $stateProvider.state(piechart);

  $stateProvider.state(profilequestions);
  $stateProvider.state(profilequestions1);
  $stateProvider.state(profilequestions2);
  $stateProvider.state(profilequestions3);
  $stateProvider.state(profilequestions4);
  $stateProvider.state(profilequestions5);
  $stateProvider.state(profilequestions6);
  $stateProvider.state(profilequestions7);
  $stateProvider.state(profilequestions8);
  $stateProvider.state(profilequestions9);
  $stateProvider.state(profilequestions10);
  $stateProvider.state(profilequestions11);

  $urlRouterProvider.when('', '/login');
});
