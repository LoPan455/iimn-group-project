app.controller('CreditReportController', function(ClientFactory) {

  console.log('CreditReportController controller running');

  var self = this;
  self.client = ClientFactory.client;

});//end app.controller
