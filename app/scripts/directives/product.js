'use strict';

shoppingApp.directive('product', function() {
  return {
    template: '<img ng-src="{{type.img}}" width="200px">' +
      '<div>' +
        '{{type.name}} | {{type.price | currency}}' +
      '</div>',
    restrict: 'E',
    scope: {
      'type': '='
    }
  };
});
