app.controller('MainStateController', function(ClientFactory, hotkeys) {

  console.log('MainStateController controller running');

  var self = this;
  self.client = ClientFactory.client;
  // ClientFactory.saveClientData(self.client);
  hotkeys.add({
    combo: 'shift+alt+1',
    description: 'Directs to budget view',
    callback: function(){
      console.log('Hot what? Hot keys!');
    }
  });

});//end app.controller
