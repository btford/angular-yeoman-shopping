'use strict';

shoppingApp.factory('basket', function() {

  var basket = {};
  var count = 0;

  // Public API here
  return {
    get: function() {
      return basket;
    },
    count: function () {
      return count;
    },
    add: function (item) {
      if (basket[item.id]) {
        basket[item.id].quantity += 1;
      } else {
        basket[item.id] = {
          type: item,
          quantity: 1
        };
      }
      count += 1;
    },
    remove: function(item) {
      count -= basket[item.type.id].quantity;
      delete basket[item.type.id];
    }
  };
});
