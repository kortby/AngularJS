<!-- http://embed.plnkr.co/taU55wPIWiIyhCYSKZZu/ -->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Google material design</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/bootstrap-material-design.min.css">
	<link rel="stylesheet" href="css/bootstrap-material-design.min.css.map">
	<link rel="stylesheet" href="css/ripples.min.css">
	<link rel="stylesheet" href="css/ripples.min.css">

	

</head>
<body>
  
  <div class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#/main">Computer Solution</a>
    </div>
    <div class="navbar-collapse collapse navbar-responsive-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#/main">Home</a></li>
        <li><a href="#/about">About</a></li>
        <li><a href="#/service">Service</a></li>
        
      </ul>
     
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#/contact">Contact</a></li>
        
      </ul>
    </div>
  </div>
</div>

<div ng-controller="MainCtrl">
  <div ng-view></div>
</div>
   

   <script src="js/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-resource.min.js">
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.min.js">
   </script>
  <script src="js/bootstrap.js"></script> 
  <script src="js/script.js"></script>  
    
</body>
</html>
</html>