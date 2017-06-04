angular
	.module('app',['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/',{
				templateUrl:'assets/templates/home.html',
				controller:'homeCtrl'
			})
			.when('/food', {
				templateUrl:'assets/templates/food.html',
				controller:'foodCtrl',
				resolve:{
					food:['Food', function (Food) {
						return Food.get();
					}]
				}	
			})
			.otherwise('/');
	}]);