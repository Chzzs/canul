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

angular.module('canul').controller('EditoController', ['$scope', '$http', function($scope, $http) {
	$http({method:'GET', url: '/edito'}).success(function (data) {
		$scope.edito = data;
	});
}]);

/* Menu controllers */

angular.module('canul').controller('MenuController', ['$scope', function($scope) {

	$scope.items = [];
	$scope.show = true;

	$scope.toggle = function() {
		if( $scope.show ) {
			$scope.append();
			$scope.menu = "active";
		}	else {
			$scope.remove();
			$scope.menu = "inactive";
		}

		$scope.show = ! $scope.show;

		console.log($scope.menu);
	};

	$scope.append = function() {
		$scope.items = ["filter", "search", "contact"];
	};

	$scope.remove = function () {
		$scope.items= [];
	};

}]);
