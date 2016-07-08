// Code goes here

var app = angular.module('computer', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/main', {
      templateUrl: 'main.php',
      controller: 'MainCtrl'
    }).
    when('/about', {
      templateUrl: 'about.php',
      controller: 'AboutCtrl'
    }).
    when('/service', {
      templateUrl: 'service.php',
      controller: 'ServiceCtrl'
    }).
    when('/contact', {
      templateUrl: 'contact.php',
      controller: 'ContactCtrl'
    })    
    .otherwise({redirectTo: '/main'});
    
 }])
  .controller('MainCtrl', ['$scope', function($scope){
  	console.log('works!');
    $scope.title = 'Marketing stuff!';
  }])
  
  .controller('ServiceCtrl', ['$scope', '$http', function($scope, $http){
    
    $http.get('service.json').then(function(response){
      $scope.service = response.data;
    });
  }]);