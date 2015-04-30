(function() {
  'use strict';

  angular
    .module('tiendalylWeb.clients')
    .directive('newDeposit', newDeposit);

  function newDeposit() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/clients/newDeposit.directive.html',
      scope: {
        client: '='
      },
      controller: 'NewDepositController',
      controllerAs: 'newDepositController',
      bindToController: true
    };

    return directive;
  }
})();
