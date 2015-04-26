(function() {
  'use strict';
  
  var baseUrl = 'http://tiendalyl-admin.herokuapp.com/api/v1/';

  angular
    .module('tiendalylWeb.clients')
    .factory('purchasesservice', purchasesservice);

  purchasesservice.$inject = ['$resource'];

  function purchasesservice($resource) {
    var Purchase = $resource(baseUrl + 'purchases/:id', null, {});

    return {
      savePurchase: savePurchase,
    };

    function savePurchase(purchaseParams) {
      var purchase = new Purchase(purchaseParams);
      purchase.$save();

      return purchase;
    }
  }
})();