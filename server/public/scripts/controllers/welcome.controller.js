app.controller('WelcomeController', function($location,ClientFactory,LoginFactory) {

  console.log('WelcomeController controller running');
  var self = this;
  self.user = LoginFactory.loggedInUser;


  self.client = ClientFactory.client;



  self.logOut = function(){
    console.log('logout button clicked');
    LoginFactory.logOut();

  };

    // This probably needs a dependency:  self.client.date = $filter('date')(Date.now(), 'yyyy-MM-dd');

  // This didn't seem to do anything:   self.date = new Date().toISOString().split("T")[0];

  // self.user.date = new Date();

});//end app.controller
