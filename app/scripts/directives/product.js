'use strict';

shoppingApp.directive('product', function() {
  return {
    template: '<h4>{{type.name}}</h4>' +
      '<img ng-src="{{type.img}}" width="200px">' +
      '<div>' +
        '<p>Price: {{type.price | currency}}</p>' +
      '</div>',
    restrict: 'E',
    scope: {
      'type': '='
    }
  };
});
