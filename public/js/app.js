/* global angular:true */

/* Router */
angular.module('canul', ['ngMaterial','ngRoute']).config( function($routeProvider) {
  $routeProvider.when('/articles', {
    templateUrl: 'templates/pages/index.html',
    controller: 'IndexController'
  }).when('/articles/:id', {
    templateUrl:'templates/pages/show.html',
    controller: 'ShowController'
  })
  .otherwise({ redirectTo: '/articles'});
});

/* Theme */
angular.module('canul').config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('pink')
        .backgroundPalette('grey');
});
