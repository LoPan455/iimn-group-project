app.controller('WelcomeController', function($location,ClientFactory,LoginFactory) {

  console.log('WelcomeController controller running');
  var self = this;
  self.user = LoginFactory.loggedInUser;
  self.testMessage = ClientFactory.testMessage;
  self.clientTester = ClientFactory.clientTester;

  self.saveNewClient = function(client) {
  console.log('saveNewClient() called - object is: ', client);
  ClientFactory.newClient(client);
  };

  self.logOut = function(){
    console.log('logout button clicked');
    LoginFactory.logOut();
  };


});//end app.controller
