'use strict';

// Declare app level module which depends on views, and components
angular.module('myContact', [
  'ngRoute',
  'firebase',
  'myContact.contacts'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
