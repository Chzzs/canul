angular.module("canul").factory("Article",["$http",function t(r){return{all:function(){return r({method:"GET",url:"/articles"})},create:function(t){return r({method:"POST",url:"/articles",data:t})}}}]);