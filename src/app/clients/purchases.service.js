(function() {
  'use strict';

  var baseUrl = 'http://tiendalyl-admin.herokuapp.com/api/v1/';

  angular
    .module('tiendalylWeb.clients')
    .factory('purchasesservice', purchasesservice);

  purchasesservice.$inject = ['$resource'];

  function purchasesservice($resource) {
    var Purchase = $resource(baseUrl + 'purchases/:id', null, {});
    Purchase.prototype.calcTotal = function() {
      return (this.quantity * this.price) || 0;
    };

    return {
      newPurchase: newPurchase,
      savePurchase: savePurchase,
    };

    function savePurchase(purchase) {
      return purchase.$save();
    }

    function newPurchase() {
      return new Purchase();
    }
  }
})();
