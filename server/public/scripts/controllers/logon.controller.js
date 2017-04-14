app.controller('LogonController', ['LogonFactory', function(LogonFactory) {
  console.log('LogonController');
  var self = this;
  self.user = LogonFactory.loggedInUser;

  self.message = 'LogonController message';
  // self.loggedIn = LogonFactory.loggedIn;


  self.logIn = function() {
    console.log('LogIn button clicked');
    LogonFactory.logIn();
  }

    self.logOut = function() {
    console.log('LogOut button clicked');
    LogonFactory.logOut();
    
  }


}]);
