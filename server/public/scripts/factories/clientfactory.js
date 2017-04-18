app.factory('ClientFactory', ['$http','$firebaseAuth',function($http, $firebaseAuth) {
    var client = {client: []};
    var clientTester = { };
    var testMessage = " sumtext ";
    var auth = $firebaseAuth() // Auth with every server request


    function newClient(newClient) {
      console.log('newClient function called = ', newClient);
      var firebaseUser = auth.$getAuth();
      firebaseUser.getToken().then(function(idToken) { // Auth with every server request
      $http({
            method: 'POST',
            url: '/client/newClient',
            data: newClient,
            headers: {
              id_token: idToken
            }
            }).then(function(response) {
            console.log('response from factory: ', response);
            console.log('response.data from factory: ', response.data);
            client.client = response.data;
          });
        });
      }
      


function exportCsv() {
// var exportCsv = function() {
  console.log('exportCsv function run');
      var firebaseUser = auth.$getAuth();
      firebaseUser.getToken().then(function(idToken) { // Auth with every server request
      $http({
            method: 'POST',
            url: '/summary/export',
            data: "",
            headers: {
              id_token: idToken
            }
            }).then(function(response) {
            console.log('export response: ', response);
          });
        });
}







    return {
            client: client,
            testMessage: testMessage,
            clientTester: clientTester,
            newClient: newClient,
            export: exportCsv
          }
  }]);
