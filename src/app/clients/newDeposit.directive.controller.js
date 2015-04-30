(function() {
  'use strict';

  angular
    .module('tiendalylWeb.clients')
    .controller('NewDepositController', NewDepositController);

  NewDepositController.inject = ['depositsservice'];

  function NewDepositController(depositsservice) {
    var vm = this;
    vm.newDeposit = depositsservice.newDeposit(vm.client);
    vm.saveDeposit = saveDeposit;
    vm.closeAlert = closeAlert;
    vm.alerts = [];

    function saveDeposit() {
      depositsservice.saveDeposit(vm.newDeposit)
        .then(updateClient, saveError);
    }

    function closeAlert(index) {
      vm.alerts.splice(index, 1);
    }

    function updateClient() {
      vm.client.deposits.push(vm.newDeposit);
      vm.client.deposits_total += vm.newDeposit.amount;
      vm.client.balance -= vm.newDeposit.amount;

      vm.newDeposit = depositsservice.newDeposit(vm.client);
    }

    function saveError() {
      vm.alerts.push(
        { type: 'alert', msg: 'No se pudo guardar el abono' }
      );
    }
  }
})();
