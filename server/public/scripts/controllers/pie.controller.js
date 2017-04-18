app.controller('PieChartController', function(ClientFactory) {
  console.log('Pie controller running');
  var self = this;
  var ctx = "pie"
  self.data = [300, 500, 100];
  self.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  self.options = {
          legend: {
              display: true,
              position: 'bottom'
          }
      }

});
