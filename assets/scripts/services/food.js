angular
	.module('app')
	.factory('Food', ['$http', function ($http) {
		return {
			get:function () {
				return $http.get('api/food.json').then(function (response) {
					return response.data;
				})
			}
		}
	}]);