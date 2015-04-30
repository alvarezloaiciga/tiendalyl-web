(function() {
  'use strict';

  angular
    .module('tiendalylWeb.clients')
    .factory('depositsservice', depositsservice);

  depositsservice.$inject = ['$resource', 'httpConfig'];

  function depositsservice($resource, httpConfig) {
    var Deposit = $resource(httpConfig.baseUrl + 'clients/:clientId/deposits/:id', {
      clientId: '@client_id'
    });

    return {
      newDeposit: newDeposit,
      saveDeposit: saveDeposit,
    };

    function saveDeposit(deposit) {
      return deposit.$save();
    }

    function newDeposit(client) {
      return new Deposit({ client_id: client.id });
    }
  }
})();
