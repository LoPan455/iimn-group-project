app.controller('SummaryController', function(ClientFactory) {
  console.log('SummaryController controller running');

  var self = this;

  self.client = ClientFactory.client;




self.export = function() {
  ClientFactory.export();
}




});//end app.controller
