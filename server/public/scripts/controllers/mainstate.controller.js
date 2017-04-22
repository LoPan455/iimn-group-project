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

  hotkeys.add({
    combo: 'shift+alt+2',
    description: 'Directs to balancesheet view',
    callback: function(){
      console.log('Hot pockets');
    }
  });

  hotkeys.add({
    combo: 'shift+alt+3',
    description: 'Directs to credit report view',
    callback: function(){
      console.log('No icebox here!');
    }
  });

  hotkeys.add({
    combo: 'shift+alt+4',
    description: 'Directs to summary view',
    callback: function(){
      console.log('Holy hotkeys, Batman!');
    }
  });

});//end app.controller
