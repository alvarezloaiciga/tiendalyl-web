(function() {
  'use strict';

  angular
    .module('tiendalylWeb.clients')
    .controller('NewPurchaseController', NewPurchaseController);

  NewPurchaseController.inject = ['purchasesservice'];

  function NewPurchaseController(purchasesservice) {
    var vm = this;
    vm.newPurchase = purchasesservice.newPurchase();
    vm.savePurchase = savePurchase;
    vm.closeAlert = closeAlert;
    vm.alerts = [];

    function savePurchase() {
      purchasesservice.savePurchase(vm.newPurchase)
        .then(updateClient, saveError);
    }

    function closeAlert(index) {
      vm.alerts.splice(index, 1);
    }

    function updateClient() {
      vm.client.purchases.push(vm.newPurchase);
      vm.client.total += vm.newPurchase.total;
      vm.client.balance += vm.newPurchase.total;

      vm.newPurchase = purchasesservice.newPurchase();
    }

    function saveError() {
      vm.alerts.push(
        { type: 'alert', msg: 'No se pudo guardar la compra' }
      );
    }
  }
})();

