
console.log('client.js loaded');

var app = angular.module('fhatApp', ['ngMaterial','ui.router','firebase','chart.js'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('deep-orange');
});

// "chart.js"
