angular
	.module('app')
	.controller('foodCtrl', ['$scope','food', function ($scope, food) {
		$scope.food = food;
	}]);