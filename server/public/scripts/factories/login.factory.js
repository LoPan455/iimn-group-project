app.factory('LoginFactory', [
  '$http',
  '$firebaseAuth',
  '$location',
  function($http, $firebaseAuth, $location) {
    var userObject = {};
    var userIsLoggedIn = false;
    var auth = $firebaseAuth();
    var loggedInUser = {};


    function logIn() {
      console.log('logIn is clicked');
      auth.$signInWithPopup('google')
        .then(function(firebaseUser) {
          console.log('fhat authenticated as: ', firebaseUser.user.email);

        })
        .catch(function(error) {
          console.log('firebaseUser authentication failed: ', error);
        });
    }

    auth.$onAuthStateChanged(function(firebaseUser) {
      console.log('auth change trigger');
      if (firebaseUser) {
        firebaseUser.getToken().then(function(idToken) {
          getUserEmail(idToken);
          $location.url('/welcome');
        });
      } else {
        console.log('$onAuthStateChanged logged out');
      }
    });

    function getUserEmail(idToken) {
      $http({
        method: 'GET',
        url: '/user/logIn',
        headers: {
          id_token: idToken,
        }
      }).then(function(response) {
        console.log('response from server: ', response.data);
        loggedInUser.user = response.data;
      });
    }

    function logOut() {
      console.log('logOut is clicked');
      auth.$signOut().then(function() {
        console.log('self.logOut logged out');

        $location.url('/login');
      });
    }

    return {
      logIn: logIn,
      logOut: logOut,
      loggedInUser: loggedInUser
    };
  }]);
