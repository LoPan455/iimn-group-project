app.controller('ProfileController', function(ClientFactory) {

  console.log('ProfileController controller running');
  var self = this;

  self.user = ClientFactory.client;
  self.assistanceSection = true;
  self.confirmAssistance = function(){
    self.assistanceSection = !self.assistanceSection;
  };

  self.undoMarriage = function() {
    // console.log('mawige is what bwings us together');
    if (self.user.maritalStatus === 'single') {
      self.user.maritalStatus = null;
    }else if (self.user.maritalStatus === 'married') {
      self.user.maritalStatus = null;
      self.user.individual = null;
    }
  };

  self.bankSection = true;
  self.hideBank = function (){
    if (self.user.bank === false) {
      self.user.bank = null;
    }else {
    self.bankSection = !self.bankSection;
    }
  };

  self.clearAccounts = function(){
    self.user.checking = false;
    self.user.savings = false;
  };

  self.productSection = true;
  self.hideProducts = function (){
    self.productSection = !self.productSection;
  };

  self.undoVehicle = function() {
    if (self.user.vehicle === false) {
      self.user.vehicle = null;
    }else if (self.user.vehicle === true) {
      self.user.vehicle = null;
      self.user.numberVehicles = null;
    }
  };

});//end app.controller
