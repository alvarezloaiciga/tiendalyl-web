(function() {
  'use strict';

  angular
    .module('tiendalylWeb.clients')
    .factory('purchasesservice', purchasesservice);

  purchasesservice.$inject = ['$resource', 'httpConfig'];

  function purchasesservice($resource, httpConfig) {
    var Purchase = $resource(httpConfig.baseUrl + 'clients/:clientId/purchases/:id', {
      clientId: '@client_id'
    });

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

    function newPurchase(client) {
      return new Purchase({ client_id: client.id });
    }
  }
})();
