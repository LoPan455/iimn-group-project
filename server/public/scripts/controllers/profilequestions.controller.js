app.controller('ProfileQuestionsController', function(ClientFactory) {

  console.log('ProfileQuestionsController controller running');
  var self = this;

  self.client = ClientFactory.client;
  self.assistanceSection = true;
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
      self.client.individual = null;
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
