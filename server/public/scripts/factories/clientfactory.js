app.factory('ClientFactory', ['$http','$firebaseAuth',function($http, $firebaseAuth) {
    var client = {client: []};
    var clientTester = { };
    var testMessage = " sumtext ";
    var auth = $firebaseAuth().$getAuth(); // Auth with every server request

    function newClient(newClient) {
      console.log('newClient function called = ', newClient);
      auth.getToken().then(function(idToken) { // Auth with every server request
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


    function saveClientData(client){
      console.log('saveClientData function called. Sending this object: ', client);
      var clientId = client._id;
      auth.getToken().then(function(idToken) {
        $http({
              method: 'PATCH',
              url: '/client/update/',
              data: client,
              params: {
                id: client._id
              },
              headers: {
                id_token: idToken
              }
              }).then(function(response) {
              console.log('response from factory: ', response);
              console.log('response.data from factory: ', response.data);
              client.client = response.data;
            });
          });
        } // end saveClientData

    return {
            client: client,
            testMessage: testMessage,
            clientTester: clientTester,
            newClient: newClient,
            saveClientData: saveClientData
          };
  }]);
