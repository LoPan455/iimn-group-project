
console.log('client.js loaded');



// var app = angular.module('fhatApp', ['ngMaterial','ui.router','firebase']);

// var app = angular.module('fhatApp', ['ngMaterial','ui.router','firebase'])
// .config(function($mdThemingProvider) {
//   $mdThemingProvider.disableTheming();
// });

//
// var app = angular.module('fhatApp', ['ngMaterial','ui.router','firebase'])
// .config(function($mdThemingProvider) {
//   $mdThemingProvider.theme('default')
//     .primaryPalette('pink')
//     .accentPalette('orange');
// });


var app = angular.module('fhatApp', ['ngMaterial','ui.router','firebase', 'ngAnimate'])
.config(function($mdThemingProvider) {

  $mdThemingProvider.definePalette('iimnPalette', {
    '50': 'ffebee',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': 'f44336',
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light

    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('iimnPalette');

});



// var app = angular.module('fhatApp', ['ngMaterial','ui.router','firebase'])
// .config(function($mdThemingProvider) {
//
//   // Extend the red theme with a different color and make the contrast color black instead of white.
//   // For example: raised button text will be black instead of white.
//   var neonRedMap = $mdThemingProvider.extendPalette('red', {
//     '500': '#ff0000',
//     'contrastDefaultColor': 'dark'
//   });
//
//   // Register the new color palette map with the name <code>neonRed</code>
//   $mdThemingProvider.definePalette('neonRed', neonRedMap);
//
//   // Use that theme for the primary intentions
//   $mdThemingProvider.theme('default')
//     .primaryPalette('neonRed');
//
// });


// var app = angular.module('fhatApp', ['ngMaterial','ui.router','firebase'])
// .config(function($mdThemingProvider) {
//
//   // Extend the red theme with a different color and make the contrast color black instead of white.
//   // For example: raised button text will be black instead of white.
//   var iimnPalette = $mdThemingProvider.extendPalette('red', {
//     '500': '#ff0000',
//     'contrastDefaultColor': 'dark'
//   });
//
//   // Register the new color palette map with the name <code>neonRed</code>
//   $mdThemingProvider.definePalette('neonRed', iimnPalette);
//
//   // Use that theme for the primary intentions
//   $mdThemingProvider.theme('default')
//     .primaryPalette('neonRed');
//
// });
