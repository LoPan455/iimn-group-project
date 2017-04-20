app.controller('CreditReportController', function(ClientFactory) {

  console.log('CreditReportController controller running');

  var self = this;
  self.client = ClientFactory.client;
  ClientFactory.saveClientData(self.client);

  // self.creditCardArray = [{cardNumber:1, name:"", limit:}];



});//end app.controller
