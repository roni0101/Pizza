angular
	.module('app')
	.controller('menuCtrl', ['$scope','$location', function ($scope, $location) {

		// The function is responsible for 
		// adding active class
		// to the corect menu list item
		$scope.isActive = function (path) {
			var menuItemPath = path || '';

			var currenctPath = $location.path();
			currenctPath = currenctPath.replace('/', '');
			
			return menuItemPath === currenctPath;
		};


	}])