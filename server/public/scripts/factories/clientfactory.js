console.log('clientfactory is run');
app.factory('ClientFactory', ['$http','$firebaseAuth',function($http, $firebaseAuth) {
  var client = {

  };
  var currentClientId = '58f8d8163bf99b2537562aa4'; // used to track the current client for periodic saves
  // var currentClientId = response.data;
  // var responseData = {};ata: ', responseData);
  // var currentClientId = client._id;
  // console.log('responseD
  // var currentClientId = client._id;
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

  function exportCsv() {
    console.log('exportCsv function run');
      $http.post('/summary/getcsv').then(function(result) {
      var blob = new Blob([result.data], { type: result.config.dataType });
      var windowUrl = (window.URL || window.webkitURL);
      var downloadUrl = windowUrl.createObjectURL(blob);
      var anchor = document.createElement("a");
      anchor.href = downloadUrl;
      // var fileNamePattern = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
      // anchor.download = fileNamePattern.exec(headers['content-disposition'])[1]
      anchor.download = "distributions.csv";
      document.body.appendChild(anchor);
      anchor.click();
      windowUrl.revokeObjectURL(blob);
    });






    // var firebaseUser = auth.$getAuth();
    // firebaseUser.getToken().then(function(idToken) {
    //   // Auth with every server request
    //     $http({
    //     method: 'POST',
    //     url: '/summary/export',
    //     params: {
    //       id: currentClientId,
    //     },
    //     headers: {
    //       id_token: idToken,
    //     },
    //   }).then(function(response) {

    //     console.log('clientFactory / function exportCsv response: ',response.data);
    //     return response.data; // NEEDED??
    //   });
    // });
  }





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
},
]);
