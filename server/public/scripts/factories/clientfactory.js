app.factory('ClientFactory', ['$http','$firebaseAuth',function($http, $firebaseAuth) {
  var client = {};
  var currentClientId = ''; // used to track the current client for periodic saves
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
    // var exportCsv = function() {
    console.log('exportCsv function run');
    var firebaseUser = auth.$getAuth();
    firebaseUser.getToken().then(function(idToken) {
      // Auth with every server request
      $http({
        method: 'POST',
        url: '/summary/export',
        params: {
          id: currentClientId,
        },
        headers: {
          id_token: idToken,
        },
      }).then(function(response) {
        console.log(
          'clientFactory / function exportCsv response: ',
          response.data
        );
      });
    });
  }

  function saveClientData(client) {
    console.log(
      'saveClientData function called. Sending this object: ',
      client
    );
    var clientId = client._id;
    console.log();
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
        console.log('response from factory: ', response);
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
