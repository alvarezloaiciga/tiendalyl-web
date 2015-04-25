(function() {
  'use strict';
  
  angular
    .module('tiendalylWeb.clients')
    .controller('ClientsController', ClientsController);

  ClientsController.inject = ['clientsservice'];

  function ClientsController(clientsservice) {
    var vm = this;
    vm.allClients = [];

    activate();

    function activate() {
      getClients();
    }

    function getClients() {
      vm.allClients = clientsservice.getClients();
    }
  }
})();

