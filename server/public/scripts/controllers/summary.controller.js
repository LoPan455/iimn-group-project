app.controller('SummaryController', function(ClientFactory) {
  console.log('SummaryController controller running');
  var self = this;
  this.user = {};
  var sampleObjects = [{firstName: One}, {lastNames: Two}, {email: Three}];

self.export = function() {
  ClientFactory.export();
}




});//end app.controller
