app.controller('ProfileQuestionsController', function(ClientFactory) {

  console.log('ProfileQuestionsController controller running');
  var self = this;
  self.client = ClientFactory.client;
  self.assistanceSection = true;
  ClientFactory.saveClientData(self.client);


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
