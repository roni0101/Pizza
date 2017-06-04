angular
	.module('app')
	.controller('homeCtrl', ['$scope', 'todayOffers', function ($scope, todayOffers) {
		$scope.offers = todayOffers;
	}]);