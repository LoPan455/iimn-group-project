app.controller('BalanceSheetController', function(ClientFactory, hotkeys, $state) {

  console.log('BalanceSheetController controller running');
  var self = this;
    self.client = ClientFactory.client;
    ClientFactory.saveClientData(self.client);


    //calculated variables
    self.client.details.totalNetWorth = self.client.details.totalNetWorth || 0;

    // asset variables
    self.client.details.totalAssets = self.client.details.totalAssets || 0;

    //liability variables
    self.client.details.totalHousingLiabilities = self.client.details.totalHousingLiabilities|| 0;
    self.client.details.totalTransportationLiabilities = self.client.details.totalTransportationLiabilities || 0;
    self.client.details.totalCreditCardsOtherLoanBalance = self.client.details.totalCreditCardsOtherLoanBalance || 0;
    self.client.details.totalUnpaidBillsNotInCollections = self.client.details.totalUnpaidBillsNotInCollections || 0;
    self.client.details.totalCollectionsChargeOffsJudgments = self.client.details.totalCollectionsChargeOffsJudgments || 0;
    self.client.details.totalLiabilities = self.client.details.totalLiabilities || 0;

// asset functions
    self.addAssets = function (assetField){
      if (assetField == null) {
        assetField = 0;
      }
    self.client.details.totalAssets += Number (assetField);
    return self.client.details.totalAssets;
  };

    self.updateAssets = function(assetField){
      if (assetField == null) {
        assetField = 0;
      }
      self.client.details.totalAssets -=  assetField;
      return self.client.details.totalAssets;
    };


// liabilities functions
    // housing section
    self.addHousing = function(subSection) {
      if (subSection == null) {
        subSection = 0;
      }
      self.client.details.totalHousingLiabilities += Number (subSection);
      return self.client.details.totalHousingLiabilities;
    };

    self.updateHouse = function(inputField){
      if (inputField == null) {
        inputField = 0;
      }
      self.client.details.totalHousingLiabilities -=  inputField
      return self.client.details.totalHousingLiabilities;
    };

    //transport section
    self.addAuto = function(subSection) {
      if (subSection == null) {
        subSection = 0;
      }
      self.client.details.totalTransportationLiabilities += Number (subSection);
      return self.client.details.totalTransportationLiabilities;
    };

    self.updateAuto = function(inputField){
      if (inputField == null) {
        inputField = 0;
      }
      self.client.details.totalTransportationLiabilities -=  inputField
      return self.client.details.totalTransportationLiabilities;
    };

    // loan section
    self.addLoans = function(subSection) {
      if (subSection == null) {
        subSection = 0;
      }
      self.client.details.totalCreditCardsOtherLoanBalance += Number (subSection);
      return self.client.details.totalCreditCardsOtherLoanBalance;
    }

    self.updateLoans = function(inputField){
      if (inputField == null) {
        inputField = 0;
      }

      self.client.details.totalCreditCardsOtherLoanBalance -=  inputField
      return self.client.details.totalCreditCardsOtherLoanBalance;
    };

    // bills section
    self.addBills = function(subSection) {
      if (subSection == null) {
        subSection = 0;
      }
      self.client.details.totalUnpaidBillsNotInCollections += Number (subSection);
      return self.client.details.totalUnpaidBillsNotInCollections;
    };

    self.updateBills = function(inputField){
      if (inputField == null) {
        inputField = 0;
      }
      self.client.details.totalUnpaidBillsNotInCollections -=  inputField
      return self.client.details.totalUnpaidBillsNotInCollections;
    };

    //collection section
    self.addCollection = function(subSection) {
      if (subSection == null) {
        subSection = 0;

      }
      self.client.details.totalCollectionsChargeOffsJudgments += Number (subSection);
      return self.client.details.totalCollectionsChargeOffsJudgments;
    };

    self.updateCollection = function(inputField){
      if (inputField == null) {
        inputField = 0;
      }
      self.client.details.totalCollectionsChargeOffsJudgments -=  inputField
      return self.client.details.totalCollectionsChargeOffsJudgments;
    };

    self.updateLibailities = function(){
      self.client.details.totalLiabilities = self.client.details.totalHousingLiabilities + self.client.details.totalTransportationLiabilities + self.client.details.totalCreditCardsOtherLoanBalance + self.client.details.totalUnpaidBillsNotInCollections + self.client.details.totalCollectionsChargeOffsJudgments;
      self.calculateWorth();
      return self.client.details.totalLiabilities;
    };

    self.calculateWorth = function(){
      self.client.details.totalNetWorth = self.client.details.totalAssets - self.client.details.totalLiabilities;
      return self.client.details.totalNetWorth;
    };

    hotkeys.add({
      combo: 'alt+1',
      description: 'Switch to Balancesheet Assets',
      callback: function(){
        self.addAssets();
        self.updateLibailities();
        $state.transitionTo('main.balanceSheet.assets');
      }
    });

    hotkeys.add({
      combo: 'alt+2',
      description: 'Switch to Balancesheet Liabilities',
      callback: function(){
        self.addAssets();
        self.updateLibailities();
        $state.transitionTo('main.balanceSheet.liabilities');
      }
    });

    hotkeys.add({
      combo: 'alt+3',
      description: 'Switch to Balancesheet Snapshot',
      callback: function(){
        self.addAssets();
        self.updateLibailities();
        $state.transitionTo('main.balanceSheet.snapshot');
      }
    });

});//end app.controller
