app.controller('MainStateController', function(ClientFactory) {

  console.log('MainStateController controller running');

  var self = this;
  self.client = ClientFactory.client;
  // ClientFactory.saveClientData(self.client);

});//end app.controller
