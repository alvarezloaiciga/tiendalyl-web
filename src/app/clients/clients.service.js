(function() {
  'use strict';

  angular
    .module('tiendalylWeb.clients')
    .factory('clientsservice', clientsservice);

  clientsservice.$inject = ['$resource', 'httpConfig'];

  function clientsservice($resource, httpConfig) {
    var Client = $resource(httpConfig.baseUrl + 'clients/:id', null, {});

    return {
      getClients: getClients,
      getClient: getClient,
    };

    function getClients() {
      return Client.query();
    }

    function getClient(clientId) {
      return Client.get({ id: clientId }).$promise;
    }
  }
})();
