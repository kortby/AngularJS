var app = angular.module('computer', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/main', {
      templateUrl: 'main.html',
      controller: 'MainCtrl'
    }).
    when('/about', {
      templateUrl: 'about.html',
      controller: 'AboutCtrl'
    }).
    when('/service', {
      templateUrl: 'service.html',
      controller: 'ServiceCtrl'
    }).
    when('/contact', {
      templateUrl: 'contact.html',
      controller: 'ContactCtrl'
    })    
    .otherwise({redirectTo: '/main'});
    
 }])
  .controller('MainCtrl', ['$scope', function($scope){
  	console.log('this contorller works!');
    $scope.title = 'Hi from AngularJS!';
  }])
  
  .controller('ServiceCtrl', ['$scope', '$http', function($scope, $http){
    
    $http.get('services.json').then(function(response){
      $scope.service = response.data;
    });
  }]);