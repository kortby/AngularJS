<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
	<meta charset="UTF-8">
	<title>AngularJS</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">

	
	<script src="js/angular.min.js"></script>
	<script src="js/angular-messages.min.js"></script>

	<script src="js/script.js"></script>
</head>
<body>

<div class="container">


<h1>AngularJS</h1>

<div ng-controller="mainController">

	<input type="text" ng-model="handle">
	
	<div class="alert" ng-class="{ 'alert-warning': handle.length < characters, 'alert-danger': handle.length > characters }" ng-show="handle.length !== characters">

	must be 5

	</div>
</div>

	
	
</div>	
</body>
</html>