app.controller('BalanceSheetController', function(ClientFactory) {

  console.log('BalanceSheetController controller running');
  var self = this;
    self.client = ClientFactory.client;
    ClientFactory.saveClientData(self.client);


    //calculated variables
    self.client.totalNetWorth = self.client.totalNetWorth || 0;

    // asset variables
    self.client.totalAssets = self.client.totalAssets || 0;

    //liability variables
    self.client.totalHousingLiabilities = self.client.totalHousingLiabilities|| 0;
    self.client.totalTransportationLiabilities = self.client.totalTransportationLiabilities || 0;
    self.client.totalCreditCardsOtherLoanBalance = self.client.totalCreditCardsOtherLoanBalance || 0;
    self.client.totalUnpaidBillsNotInCollections = self.client.totalUnpaidBillsNotInCollections || 0;
    self.client.totalCollectionsChargeOffsJudgments = self.client.totalCollectionsChargeOffsJudgments || 0;
    self.client.totalLiabilities = self.client.totalLiabilities || 0;
    self.otherProperty = true;

// asset functions
    self.addAssets = function (assetField){
      if (assetField == null) {
        assetField = 0;
      }
    self.client.totalAssets += Number (assetField);
    return self.client.totalAssets;
  };

    self.updateAssets = function(assetField){
      if (assetField == null) {
        assetField = 0;
      }
      self.client.totalAssets -=  assetField;
      return self.client.totalAssets;
    };

    self.toggleClass = function (){
      self.otherPropery = !self.otherPropery;
    };

// liabilities functions
    // housing section
    self.addHousing = function(subSection) {
      if (subSection == null) {
        subSection = 0;
      }
      self.client.totalHousingLiabilities += Number (subSection);
      return self.client.totalHousingLiabilities;
    };

    self.updateHouse = function(inputField){
      if (inputField == null) {
        inputField = 0;
      }
      self.client.totalHousingLiabilities -=  inputField
      return self.client.totalHousingLiabilities;
    };

    //transport section
    self.addAuto = function(subSection) {
      if (subSection == null) {
        subSection = 0;
      }
      self.client.totalTransportationLiabilities += Number (subSection);
      return self.client.totalTransportationLiabilities;
    };

    self.updateAuto = function(inputField){
      if (inputField == null) {
        inputField = 0;
      }
      self.client.totalTransportationLiabilities -=  inputField
      return self.client.totalTransportationLiabilities;
    };

    // loan section
    self.addLoans = function(subSection) {
      if (subSection == null) {
        subSection = 0;
      }
      self.client.totalCreditCardsOtherLoanBalance += Number (subSection);
      return self.client.totalCreditCardsOtherLoanBalance;
    }

    self.updateLoans = function(inputField){
      if (inputField == null) {
        inputField = 0;
      }

      self.client.totalCreditCardsOtherLoanBalance -=  inputField
      return self.client.totalCreditCardsOtherLoanBalance;
    };

    // bills section
    self.addBills = function(subSection) {
      if (subSection == null) {
        subSection = 0;
      }
      self.client.totalUnpaidBillsNotInCollections += Number (subSection);
      return self.client.totalUnpaidBillsNotInCollections;
    };

    self.updateBills = function(inputField){
      if (inputField == null) {
        inputField = 0;
      }
      self.client.totalUnpaidBillsNotInCollections -=  inputField
      return self.client.totalUnpaidBillsNotInCollections;
    };

    //collection section
    self.addCollection = function(subSection) {
      if (subSection == null) {
        subSection = 0;

      }
      self.client.totalCollectionsChargeOffsJudgments += Number (subSection);
      return self.client.totalCollectionsChargeOffsJudgments;
    };

    self.updateCollection = function(inputField){
      if (inputField == null) {
        inputField = 0;
      }
      self.client.totalCollectionsChargeOffsJudgments -=  inputField
      return self.client.totalCollectionsChargeOffsJudgments;
    };

    self.updateLibailities = function(){
      self.client.totalLiabilities = self.client.totalHousingLiabilities + self.client.totalTransportationLiabilities + self.client.totalCreditCardsOtherLoanBalance + self.client.totalUnpaidBillsNotInCollections + self.client.totalCollectionsChargeOffsJudgments;
      self.calculateWorth();
      return self.client.totalLiabilities;
    };

    self.calculateWorth = function(){
      self.client.totalNetWorth = self.client.totalAssets - self.client.totalLiabilities;
      return self.client.totalNetWorth;
    };
});//end app.controller
