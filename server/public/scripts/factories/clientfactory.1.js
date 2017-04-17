app.factory('ClientFactory', ['$http','$firebaseAuth',function($http, $firebaseAuth) {
    var client = {client: []};
    var clientTester = { };
    var testMessage = " sumtext ";

    function newClient(newClient) {
      console.log('newClient function called = ', newClient);

$firebaseAuth.$onAuthStateChanged(function() {
      if (firebaseUser.user.email) {
        firebaseUser.getToken().then(function(idToken) {

  $http({
            method: 'POST',
            url: '/client/newClient',
            data: newClient,
            headers: {
              id_token: idToken,
            },
        });
    
          // $http({
          //   method: 'POST',
          //   url: '/client/newClient',
          //   data: newClient,
          //   headers: {
          //     id_token: idToken,
          //   },
          }).then(function(response) {
            console.log('response from factory: ', response);
            console.log('response.data from factory: ', response.data);
            client.client = response.data;
          
          });
      //   });
      // }
    }
    return {
            client: client,
            testMessage: testMessage,
            clientTester: clientTester,
            newClient: newClient
          };
  }]);
