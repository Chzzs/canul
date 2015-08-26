/* global angular:true */

angular.module('canul', ['ngRoute']).config( function($routeProvider) {
  $routeProvider.when('/articles', {
    templateUrl: 'templates/pages/index.html',
    controller: 'IndexController'
  }).when('/articles/:id', {
    templateUrl:'templates/pages/show.html',
    controller: 'ShowController'
  })
  .otherwise({ redirectTo: '/articles'});
});
 
