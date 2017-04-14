app.controller('WelcomeController', function($location,ClientFactory,LoginFactory) {

  console.log('WelcomeController controller running');
  var self = this;
  self.user = LoginFactory.loggedInUser;

  self.logOut = function(){
    console.log('logout button clicked');
    LoginFactory.logOut();
  };

});//end app.controller
