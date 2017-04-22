app.controller('ProfileQuestionsController', function(ClientFactory,$firebaseAuth) {

  console.log('ProfileQuestionsController controller running');
  var self = this;
  var auth = $firebaseAuth();
  self.client = ClientFactory.client;
  self.assistanceSection = true;


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
          ClientFactory.rescueClientData()
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
    self.client.details.SNAP = null;
    self.client.details.TANF = null;
    self.client.details.SSI = null;
    self.client.details.alimony = null;
    self.client.details.workersComp = null;
    self.client.details.otherAssist = null;
  }

  self.undoShare = function() {
    // console.log('mawige is what bwings us together');

    if (self.client.details.individual != null) {
      self.client.details.individual = null;

    }
  };

  self.neverBorrowed = function(){
    self.client.details.borrowed = false;
    self.client.details.creditCard = null;
    self.client.details.autoLoan = null;
    self.client.details.mortgage = null;
    self.client.details.heloc = null;
    self.client.details.studentLoan = null;
    self.client.details.otherLoan = null;
  };

  self.clearAccounts = function(){
    self.client.details.checking = false;
    self.client.details.savings = false;
  };


  self.undoVehicle = function() {
      self.client.details.numberVehicles = null;
  };


});//end app.controller
