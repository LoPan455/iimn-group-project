app.controller('BalanceSheetController', function(ClientFactory) {

  console.log('BalanceSheetController controller running');
  var self = this;
    self.user = ClientFactory.client;

    // test variables
    self.user.numberVehicles = 2;
    self.user.housing = 'Own';
    // self.user.otherRealEstateValue = 0;
    self.user.heloc = true;
    // asset variables
    self.assetSum = 0;

    //liability variables
    self.housingSum = 0;
    self.transportationSum = 0;
    self.loanSum = 0;
    self.unpaidBillSum = 0;
    self.collectionSum = 0;
    self.totalLiabilitiesSum = 0;

// asset functions
    self.addAssets = function (assetField){
      if (assetField == null) {
        assetField = 0;
      }
    self.assetSum += Number (assetField);
    return self.assetSum;
    }

    self.updateAssets = function(assetField){
      if (assetField == null) {
        assetField = 0;
      }
      self.housingSum -=  assetField;
      return self.housingSum;
    }



// liabilities functions
    // housing section
    self.addHousing = function(subSection) {
      if (subSection == null) {
        subSection = 0;
      }
      self.housingSum += Number (subSection);
      return self.housingSum;
    }

    self.updateHouse = function(inputField){
      if (inputField == null) {
        inputField = 0;
      }
      self.housingSum -=  inputField
      return self.housingSum;
    }

    //transport section
    self.addAuto = function(subSection) {
      if (subSection == null) {
        subSection = 0;
      }
      self.transportationSum += Number (subSection);
      return self.transportationSum;
    }

    self.updateAuto = function(inputField){
      if (inputField == null) {
        inputField = 0;
      }
      self.transportationSum -=  inputField
      return self.transportationSum;
    }

    // loan section
    self.addLoans = function(subSection) {
      if (subSection == null) {
        subSection = 0;
      }
      self.loanSum += Number (subSection);
      return self.loanSum;
    }

    self.updateLoans = function(inputField){
      if (inputField == null) {
        inputField = 0;
      }

      self.loanSum -=  inputField
      return self.loanSum;
    }

    // bills section
    self.addBills = function(subSection) {
      if (subSection == null) {
        subSection = 0;
      }
      self.unpaidBillSum += Number (subSection);
      return self.unpaidBillSum;
    }

    self.updateBills = function(inputField){
      if (inputField == null) {
        inputField = 0;
      }
      self.unpaidBillSum -=  inputField
      return self.unpaidBillSum;
    }

    //collection section
    self.addCollection = function(subSection) {
      if (subSection == null) {
        subSection = 0;
      }
      self.collectionSum += Number (subSection);
      return self.collectionSum;
    }

    self.updateCollection = function(inputField){
      if (inputField == null) {
        inputField = 0;
      }
      self.collectionSum -=  inputField
      return self.collectionSum;
    }

    self.updateLibailities = function(){
      self.totalLiabilitiesSum = self.housingSum + self.transportationSum + self.loanSum + self.unpaidBillSum + self.collectionSum;
      return self.totalLiabilitiesSum;
    }
});//end app.controller
