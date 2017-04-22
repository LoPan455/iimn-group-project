app.controller('MainStateController', function(ClientFactory, hotkeys, $state) {

  console.log('MainStateController controller running');

  var self = this;
  self.client = ClientFactory.client;
  // ClientFactory.saveClientData(self.client);
  hotkeys.add({
    combo: 'shift+alt+1',
    description: 'Directs to budget view',
    callback: function(){
      $state.transitionTo('main.budget')
    }
  });

  hotkeys.add({
    combo: 'shift+alt+2',
    description: 'Directs to balancesheet view',
    callback: function(){
      $state.transitionTo('main.balanceSheet')
    }
  });

  hotkeys.add({
    combo: 'shift+alt+3',
    description: 'Directs to credit report view',
    callback: function(){
      $state.transitionTo('main.creditReport.scores')
    }
  });

  hotkeys.add({
    combo: 'shift+alt+4',
    description: 'Directs to summary view',
    callback: function(){
      $state.transitionTo('main.summary')
    }
  });

});//end app.controller
