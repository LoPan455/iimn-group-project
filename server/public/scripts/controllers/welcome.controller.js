app.controller('WelcomeController', function($location,ClientFactory,LoginFactory) {

  console.log('WelcomeController controller running');
  var self = this;
  self.user = LoginFactory.loggedInUser;
  self.client = ClientFactory.client;
  self.testMessage = ClientFactory.testMessage;
  self.clientTester = ClientFactory.clientTester;

self.submit = function(dude) {
console.log("dude = ", dude)
ClientFactory.newClient(dude);
}


self.saveClientData = function(client){
  console.log('welcome factory saveClientData() has been called with: ',client);
  ClientFactory.saveClientData(client);
}


self.logOut = function(){
  console.log('logout button clicked');
  LoginFactory.logOut();
};



});//end app.controller
