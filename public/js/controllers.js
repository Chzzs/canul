/* global angular: true */

/* Articles controllers */

angular.module('canul').controller('IndexController', ['$scope', 'Article', function($scope, Article) {
	Article.all().success(function (data) {
		$scope.articles = data;
	});
}]);

angular.module('canul').controller('ShowController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http({method:'GET', url: '/articles/'+ $routeParams.id}).success(function (data) {
		$scope.article = data;
	});
}]);


/* Editos controllers */

angular.module('canul').controller('EditoController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http({method:'GET', url: '/edito'}).success(function (data) {
		console.log(data);
		$scope.edito = data;
	});
}]);
