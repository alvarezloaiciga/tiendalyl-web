(function() {
  'use strict';

  angular
    .module('tiendalylWeb.clients')
    .controller('ClientsDetailController', ClientsDetailController);

  ClientsDetailController.inject = ['clientsservice'];

  function ClientsDetailController($stateParams, clientsservice) {
    var vm = this;
    vm.client = null;

    vm.newDeposit = { amount: null };

    activate();

    function activate() {
      getClient();
    }

    function getClient() {
      var clientId = $stateParams.id;
      clientsservice.getClient(clientId).then(updateClient);
    }

    function updateClient(client) {
      vm.client = client;
    }
  }
})();
