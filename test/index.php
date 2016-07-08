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
	<h3>{{ 'Hello ' + name +' from AngularJS' }}</h3>
	<div class="row">
	<label for="">name</label>
	<input type="text" ng-model="handle">
	<p>{{ handle }}</p>
		
	</div>

	<div class="row">
	<label for="">Lower Case</label>
	<input type="text" ng-model="handle2">
	<p>{{ lowercasehandle }}</p>
		
	</div>
	
</div>

	<form name="myForm">
    <label>
      Enter text:
      <input type="text" ng-model="field" name="myField" required minlength="5" />
    </label>
    <div ng-messages="myForm.myField.$error" role="alert">
      <div ng-message="required">You did not enter a field</div>
      <div ng-message="minlength, maxlength">
        Your email must be between 5 and 100 characters long
      </div>
    </div>
  </form>

	
</div>	
</body>
</html>