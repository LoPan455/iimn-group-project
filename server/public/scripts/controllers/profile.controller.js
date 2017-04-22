app.controller('ProfileController', function(ClientFactory) {

  console.log('ProfileController controller running');
  var self = this;

  self.client = ClientFactory.client;

  console.log('self.client is ',self.client);
  self.assistanceSection = true;
  self.confirmAssistance = function(){
    self.assistanceSection = !self.assistanceSection;
  };

  self.undoMarriage = function() {
    // console.log('mawige is what bwings us together');
    if (self.client.details.maritalStatus === 'single') {
      self.client.details.maritalStatus = null;
    }else if (self.client.details.maritalStatus === 'married') {
      self.client.details.maritalStatus = null;
      self.client.details.individual = null;
    }
  };

  self.bankSection = true;
  self.hideBank = function (){
    if (self.client.details.bank === false) {
      self.client.details.bank = null;
    }else {
    self.bankSection = !self.bankSection;
    }
  };

  self.neverBorrowed = function(){
    self.client.details.borrowed = false;
  };

  self.clearAccounts = function(){
    self.client.details.checking = false;
    self.client.details.savings = false;
  };

  self.productSection = true;
  self.hideProducts = function (){
    self.productSection = !self.productSection;
  };

  self.undoVehicle = function() {
    if (self.client.details.vehicle === false) {
      self.client.details.vehicle = null;
    }else if (self.client.details.vehicle === true) {
      self.client.details.vehicle = null;
      self.client.details.numberVehicles = null;
    }
  };

});//end app.controller
