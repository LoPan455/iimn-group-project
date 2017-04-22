app.controller('PieChartController', function(ClientFactory) {
  console.log('Pie controller running');
  var self = this;
  var ctx = "pie";
  self.data = [35, 5, 10, 10, 5, 10, 15];
  self.labels = ["Housing", "Utilities", "Food", "Transportation", "Health", "Savings", "Miscellaneous"];
  self.options = {
          legend: {
              display: true,
              position: 'bottom'
          }
      };

});
