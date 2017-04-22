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

  var auth = $firebaseAuth();

  self.client = ClientFactory.client;
  // building this out to prevent the race condition on inadvertent page reload
     auth.$onAuthStateChanged(function(firebaseUser) {
       console.log('$onAuthStateChangedTriggered');
       if (firebaseUser) {
         if (self.client.details.hasOwnProperty('_id') ){
           console.log('ok, you have a client. self.client.details.details is: ',self.client.details);
           console.log('we will save the updated client now....');
           ClientFactory.saveClientData(self.client.details)
         } else {
           console.log('you no longer have a client in the front end, perfoming rescue');
           ClientFactory.rescueClientData()
         }
       }
   });

});//end app.controller
