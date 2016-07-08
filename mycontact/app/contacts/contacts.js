'use strict';

angular.module('myContact.contacts', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])
.directive('confirmationNeeded', function () {
  return {
    priority: 1,
    terminal: true,
    link: function (scope, element, attr) {
      var msg = attr.confirmationNeeded || "Are you sure?";
      var clickAction = attr.ngClick;
      element.bind('click',function () {
        if ( window.confirm(msg) ) {
          scope.$eval(clickAction)
        }
      });
    }
  };
})
.controller('ContactsCtrl', ["$scope", "$firebaseArray", 
function($scope, $firebaseArray) {

	var usersRef = new Firebase('https://kortbycontacts.firebaseio.com/contacts');

	$scope.contacts = $firebaseArray(usersRef);

	$scope.addForm = function(){
		$scope.addFormShow = true;

	}


	
	$scope.editForm = function (contact) {
		console.log('Updating..');

		$scope.id = contact.$id;

		$scope.name = contact.name;
		$scope.email = contact.email;
		$scope.company = contact.company;
		$scope.work = contact.phone[0].work;
		$scope.home = contact.phone[0].home;
		$scope.street = contact.address[0].street;
		$scope.city = contact.address[0].city;
		$scope.state = contact.address[0].state;
		$scope.zip = contact.address[0].zip;
		$scope.mobile = contact.phone[0].mobile;

		$scope.editFormNgshow = true;
		
	}

	$scope.hideForm = function(){

		$scope.addFormShow = false;
		$scope.editFormNgshow = false;
		$scope.contactShow = false;
	}

	$scope.addFormSubmit = function () {
		console.log('adding...');

		if ($scope.name) { var name = $scope.name } else { var name = null }
		if ($scope.company) { var company = $scope.company } else { var company = null }
		if ($scope.mobile) { var mobile = $scope.mobile } else { var mobile = null }
		if ($scope.home) { var home = $scope.home } else { var home = null }
		if ($scope.work) { var work = $scope.work } else { var work = null }

		if ($scope.email) { var email = $scope.email } else { var email = null }
		if ($scope.street) { var street = $scope.street } else { var street = null }
		if ($scope.state) { var state = $scope.state } else { var state = null }
		if ($scope.city) { var city = $scope.city } else { var city = null }
		if ($scope.zip) { var zip = $scope.zip } else { var zip = null }

			// building objects
		$scope.contacts.$add({
			name : name,
			company : company,
			email : email,
			phone : [
				{
					mobile : mobile,
					home : home,
					work : work
				}
			],
			address : [
				{
					street : street,
					state : state,
					city : city,
					zip : zip
				}
			]
			
			
		}).then(function (usersRef) {
			var id = usersRef.key();
			console.log('Adding contact with Id: '+ id);

			clearFields();

			$scope.addFormShow = false;

			$scope.msg = "Contacts Added Successfully!";
		});

	}

	// update
	$scope.editFormSubmit = function () {
		

		//console.log('updating contact');

		var id = $scope.id;

		var record = $scope.contacts.$getRecord(id);

		record.name = $scope.name;
		record.email = $scope.email;
		record.company = $scope.company;
		record.work = $scope.work;
		record.home = $scope.home;
		record.street = $scope.street;
		record.city = $scope.city;
		record.state = $scope.state;
		record.zip = $scope.zip;
		record.mobile = $scope.mobile;

		$scope.contacts.$save(record).then(function (ref) {
			console.log(ref.key);
		});

		

		$scope.editFormNgshow = false;
		
		$scope.msg = "Contact has been Updated Successfully!";

	}

	$scope.removeContact = function (contact) {
		console.log('Removing Contact');
		$scope.contacts.$remove(contact);

		$scope.msg = "Contact has been Removed!";
	}

	function clearFields() {
		console.log('Clearing the fields');

		
		$scope.email = "";
		$scope.company = "";
		$scope.mobile = "";
		$scope.work = "";
		$scope.home = "";
		$scope.street = "";
		$scope.city = "";
		$scope.state = "";
		$scope.zip = "";
	}

	$scope.ShowingContact = function (contact) {
		console.log('getting contact...');

		$scope.name = contact.name;
		$scope.email = contact.email;
		$scope.company = contact.company;
		$scope.work = contact.phone[0].work;
		$scope.home = contact.phone[0].home;
		$scope.street = contact.address[0].street;
		$scope.city = contact.address[0].city;
		$scope.state = contact.address[0].state;
		$scope.zip = contact.address[0].zip;
		$scope.mobile = contact.phone[0].mobile;

		$scope.contactShow = true;
	}

}]);
