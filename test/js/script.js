var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout, $log){

	$scope.name = 'kortby';

	$timeout(function () {

		$scope.name = 'Rich';
		
	}, 3000);


	$scope.lowercasehandle = function () {
		return $filter('lowercase')($scope.handle2);
	}

	$scope.characters = 5;

}]);