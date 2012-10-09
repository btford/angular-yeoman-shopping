'use strict';

describe('Service: catalog', function () {

  // load the service's module
  beforeEach(module('shoppingApp'));

  // instantiate service
  var catalog;
  beforeEach(inject(function(_catalog_) {
    catalog = _catalog_;
  }));

  it('should do something', function () {
    expect(!!catalog).toBe(true);
  });

});
