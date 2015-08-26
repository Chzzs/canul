/* global angular: true, console: true*/

angular.module('canul').directive('canulArticle', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/article.html',
		scope: {
			name: '=',
			id: '=',
			url: '='
		}
	};
});
