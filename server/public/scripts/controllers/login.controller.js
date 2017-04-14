app.controller('LoginController', ['LoginFactory', function(LoginFactory) {
  console.log('LoginController has started');


  var self = this;
  self.user = LoginFactory.loggedInUser;

  self.message = 'LoginController message';


  self.logIn = function() {
    console.log('LogIn button clicked');
    LoginFactory.logIn();
  }

    self.logOut = function() {
    console.log('LogOut button clicked');
    LoginFactory.logOut();

  }


}]);
