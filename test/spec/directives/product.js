'use strict';

describe('Directive: product', function() {
  beforeEach(module('shoppingApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<product></product>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the product directive');
  }));
});
