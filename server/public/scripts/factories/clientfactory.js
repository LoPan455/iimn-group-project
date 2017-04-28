app.factory('ClientFactory', ['$http','$firebaseAuth','$location', function($http, $firebaseAuth,$location) {
  console.log('Client Factory has loaded');
  var client = { details: {} };
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var clientTester = {};
  var testMessage = ' sumtext ';
  var auth = $firebaseAuth(); // Auth with every server request

  function newClient(newClient) {
    console.log('newClient function called = ', newClient);
    var firebaseUser = auth.$getAuth();
    firebaseUser.getToken().then(function(idToken) {
      // Auth with every server request
      $http({
        method: 'POST',
        url: '/client/newClient',
        data: newClient,
        headers: {
          id_token: idToken,
        },
      }).then(function(response) {
        console.log('newClient()response.data  from factory: ', response.data);
        client.details = response.data;
        console.log('client.details is now: ', client.details);
        $location.url('/profilequestions1');
      });
    });
  }
// CSV Export Function
  function exportCsv() { 
    console.log('exportCsv function run');
      var firebaseUser = auth.$getAuth();
      firebaseUser.getToken().then(function(idToken) { 
        console.log('current client: ', client);
      $http({ 
        method: 'post',
        url: '/summary/getcsv',
        data: client, // not params: client,
        headers: {
          id_token: idToken,
        },
      }).then(function(response) {
      // Note: CSV Code
      // https://developer.mozilla.org/en-US/docs/Web/API/Blob
      var blob = new Blob([response.data], { type: response.config.dataType });
      var reader = new FileReader();
      reader.addEventListener("loadend", function() {
      // reader.result contains the contents of blob as a typed array
      });
      reader.readAsArrayBuffer(blob);
      var windowUrl = (window.URL || window.webkitURL);
      var downloadUrl = windowUrl.createObjectURL(blob);
      var anchor = document.createElement("a");
      anchor.href = downloadUrl;
      anchor.download = "IIMN-Client-Data_" + date + ".csv";
      document.body.appendChild(anchor);
      anchor.click();
      windowUrl.revokeObjectURL(blob);
  }); // FOR: then-function
}); // FOR: firebaseUser
} // FOR: function exportCsv()

function saveClientData(client) {
    console.log('saveClientData function called. Sending this object: ',client);
    var clientId = client._id;
    var firebaseUser = auth.$getAuth();
    firebaseUser.getToken().then(function(idToken) {
      $http({
        method: 'PATCH',
        url: '/client/update/',
        data: client,
        params: {
          id: clientId,
        },
        headers: {
          id_token: idToken,
        },
      }).then(function(response) {
        console.log('save successful', response);
      });
    });
  } // end saveClientData

 // this is perhaps what we will need for the resuce operation
  function rescueClientData(){
    console.log('rescueClientData() function called');
    // var clientId = client._id  this would have to come from the DB
    var firebaseUser = auth.$getAuth();
    firebaseUser.getToken().then(function(idToken) {
      $http({
        method: 'GET',
        url: '/client/rescue/',
        headers: {
          id_token: idToken,
        },
      }).then(function(response) {
        console.log('rescueClientData() response.data from factory: ', response.data);
        client.details = response.data[0];
        console.log('var client in the factory is now: ',client);
      });
    });
  }

  return {
    client: client,
    testMessage: testMessage,
    clientTester: clientTester,
    newClient: newClient,
    export: exportCsv,
    saveClientData: saveClientData,
    rescueClientData: rescueClientData
  };
}]);
