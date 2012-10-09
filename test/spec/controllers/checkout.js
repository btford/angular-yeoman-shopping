'use strict';

describe('Controller: CheckoutCtrl', function() {

  // load the controller's module
  beforeEach(module('shoppingApp'));

  var CheckoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    CheckoutCtrl = $controller('CheckoutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
