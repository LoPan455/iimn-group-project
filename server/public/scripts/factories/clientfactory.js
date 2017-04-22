app.factory('ClientFactory', ['$http','$firebaseAuth','$location', function($http, $firebaseAuth,$location) {
  console.log('Client Factory has loaded');
  var client = { details: {} };
  // var currentClientId = ''; // used to track the current client for periodic saves
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
  function getClientData(){
    console.log('getClientData() function called');
    // var clientId = client._id  this would have to come from the DB
    var firebaseUser = auth.$getAuth();
    firebaseUser.getToken().then(function(idToken) {
      $http({
        method: 'GET',
        url: '/client/get/',
        params: clientId,
        headers: {
          id_token: idToken,
        },
      }).then(function(response) {
        console.log('getClientData() response.data from factory: ', response.data);
        client = response.data;
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
  };
}]);
