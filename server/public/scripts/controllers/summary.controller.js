app.controller('SummaryController', function(ClientFactory) {
  console.log('SummaryController controller running');
  var self = this;
  this.user = {};



self.export = function() {
  ClientFactory.export();
}




});//end app.controller
