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
      controller: 'NewPurchaseController',
      controllerAs: 'newPurchaseController',
      bindToController: true
    };

    return directive;
  }
})();
