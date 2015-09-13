/* global angular: true */


angular.module('canul').directive('canulShort', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/canul-short.html'
	};
});

angular.module('canul').directive('canulFull', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/canul-full.html'
	};
});

angular.module('canul').directive('canulEdito', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/canul-edito.html'
	};
});
