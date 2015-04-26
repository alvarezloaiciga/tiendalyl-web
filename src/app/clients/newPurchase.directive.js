(function() {
  'use strict';

  angular
    .module('tiendalylWeb.clients')
    .directive('newPurchase', newPurchase);


  function newPurchase() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/clients/newPurchase.directive.html',
      scope: {
        client: '='
      },
      controller: NewPurchaseController,
      controllerAs: 'newPurchase',
      bindToController: true
    };

    return directive;
  }

  NewPurchaseController.inject = ['purchasesservice'];

  function NewPurchaseController(purchasesservice) {
    var vm = this;
    vm.quantity = null;
    vm.price = null;
    vm.description = null;

    vm.save = save;


    function save() {
      var newPurchase = { quantity: vm.quantity, price: vm.price, description: vm.description };
      newPurchase = purchasesservice.savePurchase(newPurchase);
      
      vm.client.purchases.push(newPurchase);
      vm.client.total += newPurchase.total;
      vm.client.balance += newPurchase.total;
    }
  }
})();