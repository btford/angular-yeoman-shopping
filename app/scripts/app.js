'use strict';

var shoppingApp = angular.module('shoppingApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/basket', {
        templateUrl: 'views/basket.html',
        controller: 'BasketCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
