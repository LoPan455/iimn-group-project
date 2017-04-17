app.factory('ClientFactory', ['$http', function($http) {


var client = {};

console.log(client);
 //  function updateClientData(newClientInfo) {
 //    console.log('update Client before auth');
 //    console.log(newClientInfo.id);
 //    firebase.auth().currentUser.getToken().then(function(idToken) {
 //      $http({
 //        method: 'PUT',
 //        url: '/clientroutes/update/client',
 //        data: newClientInfo,
 //        headers: {
 //          id_token: idToken
 //        }
 //      }).then(function(response) {
 //        console.log('response from factory: ', response);
 //        console.log('response.data from factory: ', response.data);
 //        allClientData.list = response.data;
 //        getClient(idToken);
 //      });
 //      console.log('update Client was hit');
 //    }).catch(function(error) {
 //      console.log('error authenticating', error);
 //    });
 //  }
 //
 //  var auth = $firebaseAuth();
 //  auth.$onAuthStateChanged(function(firebaseUser) { // This code runs whenever the user changes authentication states e.g. whevenever the user logs in or logs out
 //    console.log('Client factory auth state changed');
 //    if (firebaseUser) { // firebaseUser will be null if not logged in
 //      firebaseUser.getToken().then(function(idToken) { // This is where we make our call to our server
 //        getClientData(idToken);
 //      });
 //    } else {
 //      console.log('Not logged in or not authorized.');
 //      goToLogin();
 //      allClientData.list = [];
 //    }
 //  });
 //
 //  function getClientData(idToken) {
 //    console.log('getClientData running');
 //    $http({
 //      method: 'GET',
 //      url: '/clientroutes/get/clients',
 //      headers: {
 //        id_token: idToken
 //      }
 //    }).then(function(response) {
 //      console.log('response from factory: ', response);
 //      console.log('response.data from factory: ', response.data);
 //      allClientData.list = response.data;
 //      // goToClient();
 //    }).catch(function(error) {
 //
 // // the timer on this swal not working - so shortened message
 //      swal({
 //       title: 'Sorry. Please check your email and password and try again.',
 //       timer: 4000
 //     });
 //      console.log('error authenticating', error);
 //      auth.$signOut().then(function() {
 //      console.log('Logging the user out!');
 //      });
 //    });
 //  }
 //
 //  function goToLogin() {
 //    $location.path('/login');
 //  }

return {
  client: client
};

}]);
