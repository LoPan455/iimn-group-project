app.controller('ProfileQuestionsController', function(ClientFactory,$firebaseAuth) {

  console.log('ProfileQuestionsController controller running');
  var self = this;
  var auth = $firebaseAuth();
  self.client = ClientFactory.client;
  self.assistanceSection = true;
  console.log('PCQ self.client is: ',self.client);

 // building this out to prevent the race condition on inadvertent page reload
    auth.$onAuthStateChanged(function(firebaseUser) {
      console.log('$onAuthStateChangedTriggered');
      if (firebaseUser) {
        if (self.client.details.hasOwnProperty('_id') ){
          console.log('ok, you have a client. self.client.details is: ',self.client.details);
          console.log('we will save the updated client now....');
          ClientFactory.saveClientData(self.client.details)
        } else {
          console.log('you no longer have a client in the front end, perfoming rescue');
          
        }
      }
  });


  //
  // if (self.client.details._id == null){
  //   console.log('you no longer have a client in the front end, perfom rescue');
  // } else {
  //   console.log('ok, you have a client. self.client.details is: ',self.client.details);
  //   console.log('we will save the updated client now....');
  //   ClientFactory.saveClientData(self.client.details)
  // }




    // ClientFactory.saveClientData(self.client);


  self.confirmAssistance = function(){
    self.assistanceSection = !self.assistanceSection;
  };

  self.undoAssistance = function (){
    self.client.SNAP = null;
    self.client.TANF = null;
    self.client.SSI = null;
    self.client.alimony = null;
    self.client.workersComp = null;
    self.client.otherAssist = null;
  }

  self.undoShare = function() {
    // console.log('mawige is what bwings us together');
    if (self.client.individual != null) {
      self.client.individual = null;
    }
  };

  self.neverBorrowed = function(){
    self.client.borrowed = false;
    self.client.creditCard = null;
    self.client.autoLoan = null;
    self.client.mortgage = null;
    self.client.heloc = null;
    self.client.studentLoan = null;
    self.client.otherLoan = null;
  };

  self.clearAccounts = function(){
    self.client.checking = false;
    self.client.savings = false;
  };


  self.undoVehicle = function() {
      self.client.numberVehicles = null;
  };


});//end app.controller
