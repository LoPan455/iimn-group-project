console.log('clientfactory is run');
app.factory('ClientFactory', ['$http','$firebaseAuth',function($http, $firebaseAuth) {
  var client = { };
  var currentClientId = '58f8d8163bf99b2537562aa4'; // used to track the current client for periodic saves
  // var currentClientId = client._id;
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  console.log('clientfactory.js / currentClientId = ', currentClientId);


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
        console.log('response from factory: ', response);
        console.log('response.data from factory: ', response.data);
        client = response.data;
        currentClientId = response.data._id;
        console.log('client is now: ', client);
        console.log('currentClientId is now: ', currentClientId);
      });
    });
  }
// CSV Export Function
  function exportCsv() { 
    console.log('exportCsv function run');
      var firebaseUser = auth.$getAuth();
      firebaseUser.getToken().then(function(idToken) { 
      $http({ 
        method: 'post',
        url: '/summary/getcsv',
        headers: {
          id_token: idToken,
        },
      }).then(function(result) { 
      console.log('clientfactory / function exportCsv / then(function / getToken = ', idToken)
      console.log('clientfactory / function exportCsv / then(function / result = ', result)
      // Note: CSV Code
      var blob = new Blob([result.data], { type: result.config.dataType });
      var windowUrl = (window.URL || window.webkitURL);
      var downloadUrl = windowUrl.createObjectURL(blob);
      var anchor = document.createElement("a");
      anchor.href = downloadUrl;
      // var fileNamePattern = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
      // anchor.download = fileNamePattern.exec(headers['content-disposition'])[1]
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
          id: currentClientId,
        },
        headers: {
          id_token: idToken,
        },
      }).then(function(response) {
        // console.log('response from factory: ', response);
        console.log('response.data from factory: ', response.data);
        client = response.data;
      });
    });
  } // end saveClientData
  
  return {
    client: client,
    testMessage: testMessage,
    clientTester: clientTester,
    newClient: newClient,
    export: exportCsv,
    saveClientData: saveClientData,
  };
  
}]);
