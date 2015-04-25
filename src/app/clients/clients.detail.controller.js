(function() {
  'use strict';

  angular
    .module('tiendalylWeb.clients')
    .controller('ClientsDetailController', ClientsDetailController);

  ClientsDetailController.inject = ['clientsservice'];

  function ClientsDetailController($stateParams, clientsservice) {
    var vm = this;
    vm.client = null;

    vm.newPurchase = { quantity: 1, description: '', price: '' };
    vm.newDeposit = { amount: null };

    activate();

    function activate() {
      getClient();
    }

    function getClient() {
      var clientId = $stateParams.id;
      vm.client = clientsservice.getClient(clientId);
    }
  }



})();