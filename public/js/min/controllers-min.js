angular.module("canul").controller("IndexController",["$scope","Article",function(l,o){o.all().success(function(o){l.articles=o})}]),angular.module("canul").controller("ShowController",["$scope","$http","$routeParams",function(l,o,c){o({method:"GET",url:"/articles/"+c.id}).success(function(o){l.article=o})}]);