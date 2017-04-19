app.controller('SummaryController', function(ClientFactory) {
  console.log('SummaryController controller running');

  var self = this;
  var dude = {
    food: 40,
    housing: 60,
    health: 90
  }

  self.client = ClientFactory.client;

  self.benchmarkData = [35, 5, 10, 10, 5, 10, 15];
  self.benchmarkLabels = ["Housing", "Utilities", "Food", "Transportation", "Health", "Savings", "Miscellaneous"];
  self.benchmarkOptions = {
          legend: {
              display: true,
              position: 'right'
          }
      }



  self.clientData = [dude.food, dude.housing, dude.health]
  self.clientLabels = ["Housing", "Utilities", "Food", "Transportation", "Health", "Savings", "Miscellaneous"];
  self.clientOptions = {
          legend: {
              display: true,
              position: 'right'
          }
      }


});//end app.controller
