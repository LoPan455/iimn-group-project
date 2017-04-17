app.controller('ProfileController', function(ClientFactory) {

  console.log('ProfileController controller running');
  var self = this;

  self.client = ClientFactory.client;
  self.assistanceSection = true;
  self.confirmAssistance = function(){
    self.assistanceSection = !self.assistanceSection;
  };

  self.undoMarriage = function() {
    // console.log('mawige is what bwings us together');
    if (self.client.maritalStatus === 'single') {
      self.client.maritalStatus = null;
    }else if (self.client.maritalStatus === 'married') {
      self.client.maritalStatus = null;
      self.client.individual = null;
    }
  };

  self.bankSection = true;
  self.hideBank = function (){
    if (self.client.bank === false) {
      self.client.bank = null;
    }else {
    self.bankSection = !self.bankSection;
    }
  };

  self.clearAccounts = function(){
    self.client.checking = false;
    self.client.savings = false;
  };

  self.productSection = true;
  self.hideProducts = function (){
    self.productSection = !self.productSection;
  };

  self.undoVehicle = function() {
    if (self.client.vehicle === false) {
      self.client.vehicle = null;
    }else if (self.client.vehicle === true) {
      self.client.vehicle = null;
      self.client.numberVehicles = null;
    }
  };

});//end app.controller
