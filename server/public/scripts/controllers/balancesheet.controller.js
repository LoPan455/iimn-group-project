app.controller('BalanceSheetController', function(ClientFactory) {

  console.log('BalanceSheetController controller running');
  var self = this;
    self.client = ClientFactory.client;

    // test variables
    self.client.numberVehicles = 2;
    self.client.housing = 'Own';
    self.client.otherRealEstateValue = 1;
    self.client.heloc = true;
    //
    self.housingSum = 0;
    addHousing();

    function addHousing() {
      self.housingSum += Number (self.client.mortgageBalance);
      if (self.client.heloc == true) {
          self.housingSum += Number (self.client.helocBalance);
      }else if (self.client.otherRealEstateValue != null) {
          self.housingSum += Number (self.client.otherRealEstateBalance);
      }
      return self.housingSum;
    }


});//end app.controller
