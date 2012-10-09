'use strict';

shoppingApp.controller('MainCtrl', function($scope, catalog, basket) {
  $scope.catalog = catalog;
  $scope.basket = basket;
});
