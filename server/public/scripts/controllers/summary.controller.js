app.controller('SummaryController', function(ClientFactory) {
  console.log('SummaryController controller running');

  var self = this;

  self.client = ClientFactory.client;


});//end app.controller
